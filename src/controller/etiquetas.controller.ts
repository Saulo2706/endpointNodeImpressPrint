const dbEtiquetasPrint = require("../config/dbEtiquetasPrint");

export async function insertEtiquetas(
  maquina: String,
  op: String,
  foto: String
) {
  const conn = await dbEtiquetasPrint.connect();
  const sql = "INSERT INTO etiquetas(maquina, op, data, caminhoFoto) VALUES ?";
  const values = [[maquina, op, new Date(), foto]];
  conn.query(sql, [values], function (err: any) {
    if (err) {
      return err;
    } else {
      conn.end();
      return "Sucess";
    }
  });

  return "Sucess";
}

export async function selectEtiquetas() {
  const conn = await dbEtiquetasPrint.connect();
  const [rows] = await conn.query("SELECT * FROM etiquetas;");
  return rows;
}

export async function deleteEtiqueta(id: String) {
  const conn = await dbEtiquetasPrint.connect();
  const sql = "DELETE FROM etiquetas WHERE ID=?";
  const values = [[id]];
  conn.query(sql, [values], function (err: any) {
    if (err) {
      return err;
    } else {
      conn.end();
      return "Sucess";
    }
  });
  return "Sucess";
}




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
      conn.destroy();
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
  //const [rows] = await conn.query("SELECT * FROM etiquetas;");
  conn.query("SELECT * FROM etiquetas;", function (err: any, result: any, fields: any) {
    if (err) {
        console.log(`not successful! ${err}`)
        //conn.destroy();
    } else {
        console.log(`Query was successful, ${result}`)
        //conn.destroy();
        return result
    }

  })
}

export async function deleteEtiqueta(id: String) {
  const conn = await dbEtiquetasPrint.connect();
  const sql = "DELETE FROM etiquetas WHERE ID=?";
  const values = [[id]];
  conn.query(sql, [values], function (err: any) {
    if (err) {
      conn.destroy();
      return err;
    } else {
      conn.end();
      return "Sucess";
    }
  });
  return "Sucess";
}




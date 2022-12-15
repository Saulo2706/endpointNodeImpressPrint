import { Response } from "express-serve-static-core";

let connectionRequest = require("../config/dbEtiquetasPrint");

export async function insertEtiquetas(
  maquina: String,
  op: String,
  foto: String
) {

  let connection = connectionRequest()

  const sql = "INSERT INTO etiquetas(maquina, op, data, caminhoFoto) VALUES ?";
  const values = [[maquina, op, new Date(), foto]];

  connection.query(sql, [values], function (err: any, result: any, fields: any) {
    if (err) {
      console.log(`not successful! ${err}`)
      connection.destroy();
    } else {
      //If successful, inform as such
      console.log(`Query was successful, ${result}`)
      connection.destroy();
      return "Sucess";
    }
  });

  return "Sucess";
}

export function selectEtiquetas(res: Response<any, Record<string, any>, number>) {

  //Establish the connection on this request
  let connection = connectionRequest()

  connection.query("SELECT * FROM etiquetas;", function (err: any, result: any , fields: any) {
    if (err) {
        // If an error occurred, send a generic server failure
        console.log(`not successful! ${err}`)
        connection.destroy();
    } else {
        //If successful, inform as such
        console.log(`Query was successful"!`)
        //send json file to end user if using an API
        res.json(result)
        //destroy the connection thread
        connection.destroy();
        //console.log(result)
        
    }
  });  
}

export async function deleteEtiqueta(id: String) {

  let connection = connectionRequest()

  const sql = "DELETE FROM etiquetas WHERE ID=?";
  const values = [[id]];

  connection.query(sql, [values], function (err: any, result: any, fields: any) {
    if (err) {
      console.log(`not successful! ${err}`)
      connection.destroy();
    } else {
      //If successful, inform as such
      console.log(`Query was successful, ${result}`)
      connection.destroy();
      return "Sucess";
    }
  });

  return "Sucess";
}




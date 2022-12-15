"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEtiqueta = exports.selectEtiquetas = exports.insertEtiquetas = void 0;
let connectionRequest = require("../config/dbEtiquetasPrint");
function insertEtiquetas(maquina, op, foto) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection = connectionRequest();
        const sql = "INSERT INTO etiquetas(maquina, op, data, caminhoFoto) VALUES ?";
        const values = [[maquina, op, new Date(), foto]];
        connection.query(sql, [values], function (err, result, fields) {
            if (err) {
                console.log(`not successful! ${err}`);
                connection.destroy();
            }
            else {
                //If successful, inform as such
                console.log(`Query was successful, ${result}`);
                connection.destroy();
                return "Sucess";
            }
        });
        return "Sucess";
    });
}
exports.insertEtiquetas = insertEtiquetas;
function selectEtiquetas(res) {
    //Establish the connection on this request
    let connection = connectionRequest();
    connection.query("SELECT * FROM etiquetas;", function (err, result, fields) {
        if (err) {
            // If an error occurred, send a generic server failure
            console.log(`not successful! ${err}`);
            connection.destroy();
        }
        else {
            //If successful, inform as such
            console.log(`Query was successful"!`);
            //send json file to end user if using an API
            res.json(result);
            //destroy the connection thread
            connection.destroy();
            //console.log(result)
        }
    });
}
exports.selectEtiquetas = selectEtiquetas;
function deleteEtiqueta(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connection = connectionRequest();
        const sql = "DELETE FROM etiquetas WHERE ID=?";
        const values = [[id]];
        connection.query(sql, [values], function (err, result, fields) {
            if (err) {
                console.log(`not successful! ${err}`);
                connection.destroy();
            }
            else {
                //If successful, inform as such
                console.log(`Query was successful, ${result}`);
                connection.destroy();
                return "Sucess";
            }
        });
        return "Sucess";
    });
}
exports.deleteEtiqueta = deleteEtiqueta;

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
exports.selectEtiquetas = exports.insertEtiquetas = void 0;
const dbEtiquetasPrint = require("../config/dbEtiquetasPrint");
function insertEtiquetas(maquina, op, foto) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield dbEtiquetasPrint.connect();
        const sql = "INSERT INTO etiquetas(maquina, op, data, caminhoFoto) VALUES ?";
        const values = [[maquina, op, new Date(), foto]];
        conn.query(sql, [values], function (err) {
            if (err) {
                return err;
            }
            else {
                conn.end();
                return "Sucess";
            }
        });
        return "Sucess";
    });
}
exports.insertEtiquetas = insertEtiquetas;
function selectEtiquetas() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield dbEtiquetasPrint.connect();
        const [rows] = yield conn.query("SELECT * FROM etiquetas;");
        return rows;
    });
}
exports.selectEtiquetas = selectEtiquetas;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.etiquetasRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const etiquetas_service_1 = require("../service/etiquetas.service");
const etiquetas_controller_1 = require("../controller/etiquetas.controller");
exports.etiquetasRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)({ storage: etiquetas_service_1.storage });
exports.etiquetasRoutes.post("/etiqueta", upload.single("foto"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.maquina) == undefined || ((_b = req.body) === null || _b === void 0 ? void 0 : _b.op) == undefined || ((_c = req.file) === null || _c === void 0 ? void 0 : _c.filename) == undefined) {
        res.status(422).send();
    }
    else {
        const { maquina, op } = req.body;
        const foto = 'uploads/' + ((_d = req.file) === null || _d === void 0 ? void 0 : _d.filename);
        const resultado = yield (0, etiquetas_controller_1.insertEtiquetas)(maquina, op, foto);
        if (resultado == "Sucess") {
            //res.json({ maquina, op, foto });
            res.status(200).send();
        }
        else {
            return res.status(405).send(resultado);
        }
    }
}));
exports.etiquetasRoutes.get("/etiquetas", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const etiquetas = yield (0, etiquetas_controller_1.selectEtiquetas)();
    return res.json(etiquetas);
}));

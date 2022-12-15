import { Router } from "express";
import multer from "multer";
import { storage } from "../service/etiquetas.service";
import {
  insertEtiquetas,
  selectEtiquetas,
  deleteEtiqueta
} from "../controller/etiquetas.controller";

export const etiquetasRoutes = Router();

const upload = multer({ storage });

etiquetasRoutes.post("/etiqueta", upload.single("foto"), async (req, res) => {

  if(req.body?.maquina == undefined || req.body?.op == undefined || req.file?.filename == undefined){
    res.status(422).send()
  }else{
    const { maquina, op } = req.body;
    const foto = 'uploads/'+req.file?.filename;
    const resultado = await insertEtiquetas(maquina, op, foto);
    if (resultado == "Sucess") {
      //res.json({ maquina, op, foto });
      res.status(200).send()
    } else {
      return res.status(405).send(resultado);
    }
  }
  
});

etiquetasRoutes.get("/etiquetas", async (req, res) => {
  const etiquetas = selectEtiquetas(res);
  //console.log("etiquetas: " + etiquetas)

 // return res.status(200).json(etiquetas);
});

etiquetasRoutes.delete("/etiquetas/:id", async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id
    const resultado = await deleteEtiqueta(id);
    if (resultado == "Sucess") {
      res.status(200).send()
    } else {
      return res.status(405).send(resultado);
    }
    
});

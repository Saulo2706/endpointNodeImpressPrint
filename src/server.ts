import express from "express";
import cors from "cors";
import {etiquetasRoutes} from "./routes/etiquetas.routes";

const app = express();

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  next();
});

app.use(etiquetasRoutes);
app.use('/uploads', express.static('./uploads'));

app.listen(3031);

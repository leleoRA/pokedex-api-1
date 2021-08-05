import "./setup";

import express, {Request, Response} from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userController";

const app = express();
app.use(cors());
app.use(express.json());

// Rota: cadastro [pública]
app.post("/sign-up", userController.signUp);

// Rota: login [pública]

// Rota: pegar todos pokemons [logado]

// Rota: adicionar pokemons na minha lista [logado]

// Rota: remover pokemons na minha lista [logado]

export async function init () {
  await connectDatabase();
}

export default app;

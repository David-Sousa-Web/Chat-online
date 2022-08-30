import express, { request, response } from 'express';

import './database';

const app = express();

/**
 * GET = buscas
 * POST = Criação
 * PUT = alteração
 * DELETE = deletar
 * PATCH = alterar uma informação especifica
 */

app.get("/", (request, response) =>{
  return response.json({message: "Olá NLW 05"})

})

app.post("/", (request, response) =>{
  return response.json({message: "Usuario salvo com sucesso!"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))
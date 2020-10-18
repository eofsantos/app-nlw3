import express, { response } from 'express';
import './database/connection'

const app = express();
app.use(express.json())

app.listen(3333)

//rotas

app.get("/", (request, response) => {
    return response.json({ menssage: "Olá"})
})
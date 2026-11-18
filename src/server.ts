import express from 'express'
import refrigeranteRouter from './routes/refrigerante.routes';
import {pool} from './database/connection'
import "dotenv/config"

const app = express()
const port = 3000

app.use(express.json())

app.use("/refrigerantes", refrigeranteRouter)

app.listen(port, ()=>{
    console.log("Servidor ligado em https://localhost:3000")
})
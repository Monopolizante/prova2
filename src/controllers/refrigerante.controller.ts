import {type Request, type Response} from 'express'
import { refrigeranteServices } from '../services/refrigerante.services';
class RefrigeranteController{
    async getRefrigerantes(req: Request, res:Response){
        try {
            const data = await refrigeranteServices.getRefrigerantes()
            return res.json(data).status(200)
        } catch (error) {
            console.log(error)  //kkkkkkkkkkkkkkkkk
        }
    }
    async createRefrigerante(req: Request, res:Response){
        try {
           const {nome, marca, sabor, volume_ml, preco, quantidade_estoque} = req.body
           console.log(req.body)
           const retorno = await refrigeranteServices.createRefrigerante(nome, marca, sabor, volume_ml, preco, quantidade_estoque)
           return res.status(201) 
        } catch (error) {
            console.log(error)
        }
    }
}
export const refrigeranteController = new RefrigeranteController
import {refrigeranteRepository} from "../repositories/refrigerante.repository"

class RefrigeranteServices{
    async getRefrigerantes(){
        try {
            const data = await refrigeranteRepository.getRefrigerantes()
            return data
        } catch (error) {
            return error
        }
    }
    async createRefrigerante(nome: string, marca:string, sabor: string, volume_ml: Float16Array, preco: Float16Array, quantidade_estoque: Int16Array){
        try {
            const data = await refrigeranteRepository.createRefrigerante(nome, marca, sabor, volume_ml, preco, quantidade_estoque)
            return data
        } catch (error) {
            console.log(error)
        }
    }
}

export const refrigeranteServices = new RefrigeranteServices
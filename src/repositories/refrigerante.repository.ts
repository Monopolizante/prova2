import { pool } from "../database/connection";


class RefrigeranteRepository{
    async getRefrigerantes(){
        try {
            const data = await pool.query("SELECT * FROM refrigerantes") 
            return data.rows
        } catch (error) {
            console.log(error)
        }
    }
    async createRefrigerante(nome: string, marca:string, sabor: string, volume_ml: Float16Array, preco: Float16Array, quantidade_estoque: Int16Array){
        try {
            const data = pool.query('INSERT INTO refrigerantes(nome, marca, sabor, volume_ml, preco, quantidade_estoque) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_refrigerante', [nome, marca, sabor, volume_ml, preco, quantidade_estoque])
        } catch (error) {
            console.log(error)
        }
    }
}
export const refrigeranteRepository = new RefrigeranteRepository
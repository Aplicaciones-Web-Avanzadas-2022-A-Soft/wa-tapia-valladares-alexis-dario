import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM elegido';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (e) {
                return res.status(400).json({error: e.message})
            }
        case 'POST':
            try {
                const {idelegido, nombre, apellido, sexo, estatura, telefono} = body;
                const query = "INSERT INTO elegido (IDELEGIDO, NOMBRE, APELLIDO, SEXO, ESTATURA, TELEFONO) VALUES ($1,$2,$3,$4,$5,$6)";
                const values = [idelegido, nombre, apellido, sexo, estatura, telefono];
                const response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } catch (e) {
                return res.status(400).json({error: e.message})
            }
        case 'DELETE':
            try {
                const query = 'DELETE FROM elegido WHERE idelegido = $1';
                const values = [body.id];
                const response = await conn.query(query,values);
            } catch (e) {
                return res.status(400).json({error: e.message})
            }
        default:
            res.status(400).json("metodo invalido");
            break;
    }
};
import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query, body} = req;
    switch (method) {
        case 'GET':
            try {
                const text = 'SELECT * FROM digimon WHERE idelegido = $1 ORDER BY iddigimon';
                const values = [query.id];
                const response = await conn.query(text, values);
                return res.status(200).json(response.rows);
            } catch (e) {
                // @ts-ignore
                return res.status(400).json({error: e.message})
            }
        /*case 'POST':
            try {
                const {idelegido, nombre, apellido, sexo, estatura, telefono} = body;
                const query = "INSERT INTO elegido (IDELEGIDO, NOMBRE, APELLIDO, SEXO, ESTATURA, TELEFONO) VALUES ($1,$2,$3,$4,$5,$6)";
                const values = [idelegido, nombre, apellido, sexo, estatura, telefono];
                const response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } catch (e) {
                // @ts-ignore
                return res.status(400).json({error: e.message})
            }*/
        default:
            res.status(400).json("metodo invalido");
            break;
    }
};
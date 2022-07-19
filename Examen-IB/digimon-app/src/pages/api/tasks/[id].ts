import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query, body} = req;
    switch (method) {
        case 'GET':
            try {
                const text = 'SELECT * FROM elegido WHERE idelegido = $1';
                const values = [query.id];
                const result = await conn.query(text, values);
                if (result.rows.length == 0)
                    return res.status(404).json({message: "Identificador no existente"});

                return res.json(result.rows[0]);
            } catch (e) {
                // @ts-ignore
                return res.status(500).json({error: e.message})
            }
        case 'PUT':
            try {
                const {nombre, apellido, sexo, estatura, telefono} = body;
                const text = 'UPDATE elegido SET nombre = $1, apellido = $2, sexo = $3, estatura = $4, telefono = $5 WHERE idelegido = $6 RETURNING *';
                const values = [nombre, apellido, sexo, estatura, telefono, query.id];
                const result = await conn.query(text, values);
                if (result.rows.length == 0)
                    return res.status(404).json({message: "Identificador no existente"});

                return res.json(result.rows[0]);
            } catch (e) {
                // @ts-ignore
                return res.status(500).json({error: e.message})
            }
        case 'DELETE':
            try {
                const text = 'DELETE FROM elegido WHERE idelegido = $1 RETURNING *';
                const values = [query.id];
                const result = await conn.query(text, values);
                if (result.rows.length == 0)
                    return res.status(404).json({message: "Identificador no existente"});

                return res.json(result.rows[0]);
            } catch (e) {
                // @ts-ignore
                return res.status(500).json({error: e.message})
            }
        default:
            res.status(400).json("metodo invalido");
            break;
    }
}
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
        case 'DELETE':
            try {
                const text = 'DELETE FROM digimon WHERE iddigimon = $1';
                const values = [query.id];
                const response = await conn.query(text, values);
                return res.status(200).json(response.rows);
            } catch (e) {
                // @ts-ignore
                return res.status(400).json({error: e.message})
            }
        case 'POST':
            try {
                const {iddigimon, nombre, nivel, atributo, tipo, imagen} = body;
                const text = "INSERT INTO digimon (iddigimon, idelegido, nombre, nivel, atributo, tipo, imagen) VALUES ($1,$2,$3,$4,$5,$6,$7)";
                const values = [iddigimon,query.id,nombre,nivel,atributo,tipo,imagen];
                const response = await conn.query(text, values);
                return res.status(200).json(response.rows[0]);
            } catch (e) {
                // @ts-ignore
                return res.status(400).json({error: e.message})
            }
        case 'PUT':
            try {
                const {idelegido, nombre, nivel, atributo, tipo, imagen} = body;
                const text = 'UPDATE digimon SET idelegido=$1, nombre=$2, nivel=$3, atributo=$4, tipo=$5, imagen=$6 WHERE iddigimon = $7 RETURNING *';
                const values = [idelegido, nombre, nivel, atributo, tipo, imagen, query.id];
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
};
import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query, body} = req;
    switch (method) {
        case 'GET':
            const text = 'SELECT * FROM digimon WHERE iddigimon = $1';
            const values = [query.id];
            const result = await conn.query(text, values);
            if (result.rows.length == 0)
                return res.status(404).json({message: "Identificador no existente"});

            return res.json(result.rows[0]);
        default:
            res.status(400).json("metodo invalido");
            break;
    }
};
import {NextApiRequest, NextApiResponse} from "next";
import {conn} from "../../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query, body} = req;
    switch (method) {
        case 'GET':
            try {
                const text = 'SELECT * FROM digimon WHERE iddigimon = $1';
                const values = [query.id];
                const response = await conn.query(text, values);
                return res.status(200).json(response.rows);
            } catch (e) {
                // @ts-ignore
                return res.status(400).json({error: e.message})
            }
        default:
            res.status(400).json("metodo invalido");
            break;
    }
};
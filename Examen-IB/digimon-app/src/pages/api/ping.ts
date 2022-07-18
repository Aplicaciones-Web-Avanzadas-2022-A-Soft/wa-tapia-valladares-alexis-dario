import{NextApiRequest,NextApiResponse} from "next";
import {conn} from "../../utils/database";

export default async (req: NextApiRequest, res:NextApiResponse) => {
  const response = await conn.query("SELECT * FROM elegido");
  console.log(response);
  return res.json("pong");
}
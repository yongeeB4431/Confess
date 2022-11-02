import connectMongo from "../../../utils/connectDb";
import Confession from "../../../models/confessionsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addConfession(req, res) {
  try {
    const confession = await Confession.create(req.body);

    res.json({ confession });
  } catch (err) {
    res.json({ err });
  }
}

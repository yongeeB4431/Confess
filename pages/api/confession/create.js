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
    if (res.status <= 300) {
      refreshData();
    }
  } catch (err) {
    console.log(err);
  }
}

import Confession from "../../../../models/confessionsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function editConfession(req, res) {
  const id = req.query.id;
  try {
    const user = await Confession.findOneAndUpdate({ _id: id }, req.body);
    res.status(200);
    res.end(JSON.stringify(user));
  } catch (err) {
    res.json({ err: err.message });
  }
}

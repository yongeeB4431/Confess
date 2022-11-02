import Confession from "../../../../models/confessionsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function newData(req, res) {
  const id = req.query.id;

  try {
    const data = await Confession.findOneAndUpdate({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    res.status(405).end(JSON.stringify(err.message));
    res.status(JSON.stringify(data));
  }
}

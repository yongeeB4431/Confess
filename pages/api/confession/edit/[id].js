import Confession from "../../../../models/confessionsModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addConfession(req, res) {
  const id = req.query.id;

  try {
    const data = await Confession.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          editHistory: req.body,
        },
      }
    );
    // const response = await data.json();
    res.json({ data });
  } catch (err) {
    res.json({ err: err.message });
  }
}

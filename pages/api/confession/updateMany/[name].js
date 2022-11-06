import Confession from "../../../../models/confessionsModel";
export default async function updateMany(req, res) {
  try {
    const _data = await Confession.updateMany(
      { user: req.query.name },
      { $set: req.body }
    );
    res.json({ _data });
  } catch (err) {
    res.json({ err: err.message });
  }
}

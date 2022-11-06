import Confession from "../../../../models/confessionsModel";
export default async function Delete(req, res) {
  const id = req.query.id;
  try {
    await Confession.findOneAndDelete({ _id: id });
    let data = await Confession.find();
    res.json({ confession: data });
  } catch (err) {
    res.json({ err: err.message });
  }
}

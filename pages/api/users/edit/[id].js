import Info from "../../../../models/infoModel";

export default async function edit(req, res) {
  const id = req.query.id;
  try {
    let data = await Info.findOneAndUpdate({ _id: id }, req.body);
    res.json({ message: data });
  } catch (err) {
    res.json({ err: err.message });
  }
}

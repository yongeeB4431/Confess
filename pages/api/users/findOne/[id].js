import Info from "../../../../models/infoModel";
export default async function find(req, res) {
  const id = req.query.id;
  try {
    let data = await Info.find({ _id: id });
    res.json({ data: data });
  } catch (err) {
    console.log(err.message);
  }
}

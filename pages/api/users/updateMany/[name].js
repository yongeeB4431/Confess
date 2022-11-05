import Info from "../../../../models/infoModel";
export default async function updateMany(req, res) {
  try {
    const _data = await Info.updateMany(
      { name: req.query.name },
      { $set: req.body }
    );
    res.json({ _data });
  } catch (err) {
    console.log(err.message);
  }
}

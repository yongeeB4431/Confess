import Info from "../../../models/infoModel";

export default async function find(req, res) {
  try {
    let data = await Info.find();
    res.json({ message: data });
  } catch (err) {
    console.error(err.message);
  }
}

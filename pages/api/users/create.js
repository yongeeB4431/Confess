import Info from "../../../models/infoModel";

export default async function create(req, res) {
  try {
    await Info.create(req.body);
    res.json({ message: "success" });
  } catch (err) {
    console.error(err.message);
  }
}

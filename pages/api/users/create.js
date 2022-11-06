import Info from "../../../models/infoModel";
import connectMongo from "../../../utils/connectDb";
export default async function create(req, res) {
  try {
    await connectMongo();
    await Info.create(req.body);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ err: err.message });
  }
}

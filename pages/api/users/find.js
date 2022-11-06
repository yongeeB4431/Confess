import Info from "../../../models/infoModel";
import connectMongo from "../../../utils/connectDb";
export default async function find(req, res) {
  try {
    await connectMongo();
    let data = await Info.find();
    res.json({ message: data });
  } catch (err) {
    res.json({ err: err.message });
  }
}

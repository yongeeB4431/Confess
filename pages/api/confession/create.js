import connectMongo from "../../../utils/connectDb";
import Confession from "../../../models/confessionsModel";

export default async function addConfession(req, res) {
  try {
    await connectMongo();
    await Confession.create(req.body);
    res.json({ message: "success" });
  } catch (err) {
    res.json({ err: err.message });
  }
}

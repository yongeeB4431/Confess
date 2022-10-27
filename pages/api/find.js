import Confession from '../../models/confessionsModel'
import connectMongo from "../../utils/connectDb"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function find(req,res){
	try{
		await connectMongo()
		const confession = await Confession.find()
		console.log("CREATED DOCUMENT")

		res.json({ confession })
	
	} catch(err){
		console.log(err);
	}
	
	


}
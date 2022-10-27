import connectMongo from '../../utils/connectDb'
import Confession from '../../models/confessionsModel'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function find(req,res){
	try{
		
		console.log("CONNECTING TO MONGO")
		await connectMongo()
		console.log("CONNECTED TO MONGO");
	
		console.log("CREATING DOCUMENT")
		const confession = await Confession.find()
		console.log("CREATED DOCUMENT")

		res.json({ confession })
	
	} catch(err){
		console.log(err);
	}
	
	


}
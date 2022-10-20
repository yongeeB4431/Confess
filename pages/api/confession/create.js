import connectMongo from '../../../utils/connectDb'
import Confession from '../../../models/confessionsModel'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addConfession(req,res){
	try{
		const {title, yourConfession, date, time, starred, timesEdited, editHistory, musicLink} = req.body

		console.log("CONNECTING TO MONGO")
		await connectMongo()
		console.log("CONNECTED TO MONGO");
	
		console.log("CREATING DOCUMENT")
		const confession = await Confession.create(req.body)
		console.log("CREATED DOCUMENT")

		res.json({ confession })
	
	} catch(err){
		console.log(err);
	}
	
	


}
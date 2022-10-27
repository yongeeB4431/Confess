import Confession from '../../models/confessionsModel'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function find(req,res){
	try{
		const confession = await Confession.find()
		console.log("CREATED DOCUMENT")

		res.json({ confession })
	
	} catch(err){
		console.log(err);
	}
	
	


}
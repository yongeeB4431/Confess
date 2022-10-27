import Confession from '../../../../models/confessionsModel'

/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function editConfession(req,res){
		const id = req.query.id;
		try{
			const user = await Confession.findOneAndUpdate({_id: id}, {starred: req.body.starred})
			res.status(200);
			res.end(JSON.stringify(user))
		} catch(err){
			res.json(err);
			res.status(405).end()
			console.log(err.message);
		}
		
}
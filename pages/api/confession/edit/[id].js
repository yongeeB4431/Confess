import Confession from '../../../../models/confessionsModel'


/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function addConfession(req,res){
		const id = req.query.id;
	
	try{
		await Confession.findByIdAndUpdate(id,
			{
				"$push" :  {
					editHistory: req.body}
			},

		);

			res.json({"success": id})
	} catch(err){
		res.status(405).end(JSON.stringify(err.message))
	}
		
		
}
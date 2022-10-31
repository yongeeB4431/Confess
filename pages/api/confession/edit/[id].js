import Confession from '../../../../models/confessionsModel'


/**
* @param {import('next').NextApiRequest} req
* @param {import('next').NextApiResponse} res
*/
export default async function addConfession(req,res){
		const id = req.query.id;
	
	try{
		const data = await Confession.findOneAndUpdate({_id:id}, {
			yourConfession: req.body.yourConfession,
			"$push":{
				editHistory:[
					{
						yourConfession : req.body.updateConfession,
						day: req.body.day,
						date: req.body.date,
						time: req.body.time
					}
				]
			}
		})
		const response = await data.json()
		res.json({response})
	} catch(err){
		res.status(405).end(JSON.stringify(err.message))
	}
		
		
}
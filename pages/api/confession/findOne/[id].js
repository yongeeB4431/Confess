import Confession from "../../../../models/confessionsModel"

export default async function findOne(req, res){
	try{
		const id = req.query.id
		const data = await Confession.findOne({_id: id})
		res.status(200)
		res.json(data)
	} catch(err){
		console.error(err)
	}
	
}
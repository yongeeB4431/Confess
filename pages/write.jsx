import Input from '../component/Write/Write'
import { server } from '../config';

function Write({editConfession}){
return (
<Input editConfession={editConfession}/>
)
}
export async function getServerSideProps(context){
	const {req, res} = context
	var hostName = req.headers.host
try{
let id = context.query.id;
if(id){
	const data = await fetch(`${server}${hostName}/api/confession/findOne/${id}`)
	let editConfession = await data.json()
	res.setHeader('Cache-Control', 'public s-manage=10, stale-while-revalidate=59')
	return{
		props: {editConfession}
	} 
	}
		return{
			props: {editConfession: {}}
	
}
	
}catch(err){
console.log(err)
}
}
export default Write;
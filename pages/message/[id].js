import Confession from "../../component/message/Message"
import { server } from "../../config/index"

function Message(props){
return <Confession confession={props.data} />

}

export async function getServerSideProps(context){
	const {req, query, res} = context;
	const host = req.headers.host
try{
	const data  = await fetch(`${server}${host}/api/confession/findOne/${query.id}`)
	const result = await data.json()
	res.setHeader('Cache-Control', 'public s-manage=10, stale-while-revalidate=59')
	return{
		props:{data: result }
	}
	} catch(err){
		console.log(err.message)
	}
}




export default Message
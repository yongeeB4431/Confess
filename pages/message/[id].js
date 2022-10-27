import Confession from "../../component/message/Message"
import { server } from "../../config/index"
function Message(props){
return <Confession confession={props.data} />

}

export async function getServerSideProps(context){
	const {req, query} = context;
	const host = req.headers.host
try{
	const data  = await fetch(`${server}${host}/api/confession/findOne/${query.id}`)
	const result = await data.json()
	return{
		props:{data: result }
	}
	} catch(err){
		console.log(err.message)
	}
}




export default Message
import Edit from "../../component/Edit/Edit";
import {server} from "../../config/index"
function EditHistory({history}){
	return(
		<Edit history={history} />
	)
}

export const getServerSideProps = async(context) =>{
let {req, query, res} = context
let id = query.id;
let hostName = req.headers.host
try{
  const data = await fetch(`${server}${hostName}/api/confession/findOne/${id}`)
const history = await data.json()
res.setHeader('Cache-Control', 'public s-manage=10, stale-while-revalidate=59')
  return{
	props:{history: history}
  }
} catch(err){
	console.error(err.message)
}
}

export default EditHistory;
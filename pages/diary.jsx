import Diary from "../component/Diary/Diary";
import {server} from "../config/index"
import DataNotFound from "../component/DataNotFound/DataNotFound";
function diary({confessions}){
return(
	<>
	{confessions.confession.length == 0 ? <DataNotFound /> : <Diary data={confessions} />}
	</>
)	
}

export async function getServerSideProps(context){
	const {req} = context
	const res = await fetch(`${server}${req.headers.host}/api/find`)
	const data = await res.json()
	return{
		props:{confessions: data}
	}
}
export default diary;
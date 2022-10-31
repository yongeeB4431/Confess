import { useState, useRef, useEffect} from "react";
import Diary from "../component/Diary/Diary";
import {server} from "../config/index"
import DataNotFound from "../component/DataNotFound/DataNotFound";
function diary({confessions}){
	const [confess, setConfess] = useState([])
	const [deleteData, setDeleteData] = useState({})
	const update = useRef((value)=>{
		setTimeout(()=>{
			setDeleteData(value)
		},0)
	}).current
	useEffect(()=>{
		setConfess(confessions.confession)
	}, [])
	console.log(confess)
return(
<>
<Diary data={confess} deleteData={deleteData} setDeleteData={update} setConfess={setConfess} confess={confess} />
	</>
)	
}

export async function getServerSideProps(context){
	const {req, res} = context
	const response = await fetch(`${server}${req.headers.host}/api/find`)
	const data = await response.json()
	res.setHeader('Cache-Control', 'public s-manage=10, stale-while-revalidate=59')
	return{
		props:{confessions: data}
	}
}
export default diary;
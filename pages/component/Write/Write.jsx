import {useState} from "react";
import Title from "../Home/title";
import Input from "./Input";
import BottomNavigator from "../Home/BottomNavigator"
import Audio from "../Home/Audio";
import styles from "../../../styles/Home/Title.module.css";
import Icon from "../Home/WriteIcon"
import style from "../../../styles/Input/Write.module.css"
import Church from "../../static/audio/Hozier - Take Me To Church.mp3"
import { Request } from "../../../request/request";

import {
	faCarSide,
	faPaperPlane
  } from "@fortawesome/free-solid-svg-icons";
  import { DateAndTime } from "../../../functions/DateAndTime";

var inputData = {};
const initialData = {
	title: "",
	yourConfession: "",
	starred: false,
	editHistory: [],
}
function Write(){
	const [data, setData] = useState(initialData);
	const d = new DateAndTime();	
	
	function sendData(){
		const {day, Date, time} = d.handleData()
		setData({...data, time, date:Date, day})
		new Request('/api/confession/create', data).createNewCofession(day, Date, time);
		console.log("hello datass")
		console.log(day)
		
	}

	// async function editData(){
	// 	const d = new DateAndTime()
	// 	const {day, Date, time} = d.handleData()
	// 	const res = await fetch('/api/confession/edit', {
	// 		method: "POST",
	// 		body: JSON.stringify({
	// 			yourConfession: "hello world",
	// 			date:"30th september 2024",
	// 			day: "wednesday",
	// 		}),
	// 		headers:{
	// 			'Content-Type': 'application/json'
	// 		}
	// 	})
	// 	const DATA = await res.json();
	// 	console.log(DATA);
	// }

	// confirm title and confession length before sending into database
	let TCL = data.title.length >= 7 && data.yourConfession.length >= 10

	
return(
	<main className={style.container}>
	<Title leftSide={<Audio styling={styles.Audio} source={Church} />}>
	<Icon iconName={faPaperPlane} link={TCL ? "/diary" : "/write"} sendData={TCL && sendData} />
	</Title>
	<Input data={data} setData={setData} />
	<BottomNavigator />
	</main>
	
)
}

export default Write;
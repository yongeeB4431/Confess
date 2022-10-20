import {useState} from "react";
import Title from "../Home/title";
import Input from "./Input";
import BottomNavigator from "../Home/BottomNavigator"
import Audio from "../Home/Audio";
import styles from "../../../styles/Home/Title.module.css";
import Icon from "../Home/WriteIcon"
import style from "../../../styles/Input/Write.module.css"
import Church from "../../static/audio/Hozier - Take Me To Church.mp3"

import {
	faCarSide,
	faPaperPlane
  } from "@fortawesome/free-solid-svg-icons";

var inputData = {};
const initialData = {
	title: "",
	yourConfession: "",
	date: "",
	time: "",
	starred: false,
	timesEdited: 0,
	editHistory: [],
	musicLink: ""
}
function Write(){
	const [data, setData] = useState(initialData);
	function handleDay(day){
		switch(day.getDate()){
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			case 6:
				return "Saturday";
			default:
				return "Sunday";
		}
	}


	function handleMonth(month){
		switch(month){
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			default:
				return "December";
		}
	}

	function handleDate(date){
	let len = date.length - 1;
	switch(date.charAt(len)){
		case "1":
			return date + "st";
		case "2":
			return date + "nd";
		case "3":
			return date + "rd";
		default:
			return date + "th";
	}
	}

	function handleHour(hour){
		return hour < 10 ? "0" + hour : hour;
	}

	function handleMinute(minute){
		return minute < 10 ? "0" + minute : minute;
	}
	
	const handleData = () => {
		let date = new Date();
		let hour = handleHour(date.getHours());
		let minute = handleMinute(date.getMinutes());
		let time = hour + ":" + minute;
		let fullDay = `${handleDay(date)}, ${handleDate(date.getDate().toString())} ${handleMonth(date.getMonth())} ${date.getFullYear()}.`
		return{
			fullDay, time
		}
	}
	async function sendData(){
		const {time, fullDay} = handleData()
		const res = await fetch('/api/confession/create', {
			method: "POST",
			body: JSON.stringify({
				title: data.title,
				yourConfession: data.yourConfession,
				time: time,
				date: fullDay,
				starred: false,
				timesEdited: 0,
				editHistory: [],
			}),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		const DATA = await res.json();
		console.log(DATA);
	}
	
return(
	<main className={style.container}>
	<Title leftSide={<Audio styling={styles.Audio} source={Church} />}>
	<Icon iconName={faPaperPlane} link="/write" sendData={sendData}  />
	</Title>
	<Input data={data} setData={setData} />
	<BottomNavigator />
	</main>
	
)
}

export default Write;
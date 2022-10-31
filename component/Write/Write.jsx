import Head from "next/head"
import {useState} from "react";
import Title from "../Home/title";
import Input from "./Input";
import BottomNavigator from "../Home/BottomNavigator"
import Audio from "../Home/Audio";
import styles from "../../styles/Home/Title.module.css";
import Icon from "../Home/WriteIcon"
import style from "../../styles/Input/Write.module.css"
import { Request } from "../../request/request";
import {
	faPaperPlane
  } from "@fortawesome/free-solid-svg-icons";
  import { DateAndTime } from "../../functions/DateAndTime";

function Write({editConfession}){
	const t = editConfession.title !== undefined ? editConfession.title : "";
	const c = editConfession.yourConfession !== undefined ? editConfession.yourConfession : "";
	const [title, setTitle] = useState(t)
	const [yourConfession, setYourConfession] = useState(c);
	const [activeNavBar, setActiveNavBar] = useState(true)
	const d = new DateAndTime();	
	function sendData(){
		const {day, Date, time} = d.handleData()

		new Request('/api/confession/create').createNewCofession(day, Date, time, title, yourConfession);		
	}

	// confirm title and confession length before sending into database
	let TCL = title.length >= 7 && yourConfession.length >= 10
	let linkPath = TCL ? "/diary" : "/write"
	async function sendEditData(){
		const {day, Date, time} = d.handleData()
		await fetch(`/api/confession/edit/${editConfession._id}`, {
			method: "POST",
			body: JSON.stringify({yourConfession, day, time, date: Date, updateConfession: editConfession.yourConfession}),
			headers:{
				'Content-Type': 'application/json'
			},
		})
	}
const src = "https://dl.dropbox.com/s/8377unyfvmh3zs1/Beautiful%20Sad%20Piano%20Instrumental%20Song%20-%20Everywhere.mp3?dl=0"	
return(
	<main className={style.container}>
	<Head>
		<title>write</title>
	</Head>
	<Title leftSide={<Audio styling={styles.Audio} source={src} />}>
	<Icon iconName={faPaperPlane} link={linkPath} sendData={Object.keys(editConfession).length=== 0 ? TCL && sendData: TCL && sendEditData} />
	</Title>
	<Input inputProps={{title, yourConfession, setTitle, setYourConfession}} setActiveNavBar={setActiveNavBar} editConfession={editConfession}/>
	{activeNavBar && <BottomNavigator />}
	</main>
	
)
}

export default Write;
import Head from "next/head"
import {
	faBan,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";
function DataNotFound(){
	return(
		<main>
		<Head>
			<title>confessions</title>
		</Head>
		<div style={{position: "absolute",top: "50%", left: "50%"}}>
		<FontAwesomeIcon icon={faBan} color="crimson" style={{fontSize: "10vw",transform:"translate(-50%, -50%)"}} />
		<h4 style={{transform:"translate(-50%, -50%)", fontFamily: "sans-serif", textAlign:"center", color: "gray"}}>No confession has been made yet</h4>
		</div>
		<div style={{width: "100%", position: "absolute", top: "70%"}}>
		<div style={{width: "100%", display: "flex", justifyContent: "space-around", alignItems:"space-around"}}>
		</div>
		</div>
		</main>
	)
}

export default DataNotFound
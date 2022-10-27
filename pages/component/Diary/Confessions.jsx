import Link from "next/link";
import {
	faTrash,
	faStar
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../../styles/Diary/Confessions.module.css"
function cutWords(words, num){
	return words.length <= num ? words : words.substring(words, num) + "...";
}
function Confessions({confessions}){
	let {confession} = confessions;
	
	
	return(
		<main className={styles.container}>
			<div className={styles.mapContainer}>
			{confession.map((confess)=>{
				return(
					
					<div key={confess._id} className={styles.ConfessionBox}>
					<Link key={confess._id} href={{
						pathname: `/message/${confess._id}`,
						query: {
							confess: confess,
							editHistory: JSON.stringify(confess.editHistory)
						}
					}}>
					<a style={{textDecoration:"none"}}>
					<div className={styles.DateTime}>
							<h4>{confess.day}, {confess.date}</h4>
							<p>{confess.time}</p>
						</div>
						<div className={styles.TitleFavorite}>
							<h4>{confess.title}</h4>
							{confess.starred ? <FontAwesomeIcon icon={faStar} color="gold" /> : <></>}
							
						</div>
						<div className={styles.Confession}>
							<p>{cutWords(confess.yourConfession,  250)}
							</p>
						</div>
						<div className={styles.EditedDeleted}>
							<span>Edited: <span>{confess.editHistory.length}</span></span>
							<FontAwesomeIcon icon={faTrash} color="red"/>
						</div>
						</a>
						</Link>
						</div>
						
				)
			})}
			</div>
		</main>
	)
}


export default Confessions;
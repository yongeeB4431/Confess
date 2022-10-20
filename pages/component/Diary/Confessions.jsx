import {
	faTrash,
	faStar
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../../../styles/Diary/Confessions.module.css"
function cutWords(words){
	return words.substring(0, 180) + "...";
}
function Confessions(){
	return(
		<main className={styles.container}>
		<div className={styles.ConfessionBox}>
		<div className={styles.DateTime}>
				<h4>Tuesday, 24th September 2022</h4>
				<p>23:59</p>
			</div>
			<div className={styles.TitleFavorite}>
				<h4>My most favorable moment with you</h4>
				<FontAwesomeIcon icon={faStar} color="gold" />
			</div>
			<div className={styles.Confession}>
				<p>{cutWords("Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus velit ducimus maxime dolores aperiam architecto quae omnis facilis reiciendis veniam error itaque voluptatibus, explicabo doloribus ipsum veritatis. Earum, molestias eos?")}
				</p>
			</div>
			<div className={styles.EditedDeleted}>
				<span>Edited: <span>none</span></span>
				<FontAwesomeIcon icon={faTrash} color="red"/>
			</div>
			<div className={styles.MusicName}>
				<marquee>Song: Hozier - Take Me To Church</marquee>
			</div>

		</div>
		</main>
	)
}

export default Confessions;
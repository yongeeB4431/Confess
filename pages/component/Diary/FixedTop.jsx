import styles from "../../../styles/Diary/FixedTop.module.css"
import Audio from "../Home/Audio";
import Human from "../../static/audio/Rag'n'Bone Man - Human.mp3"
import {
	faTrash,
	faStar,
	faMessage
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function FixedTop(){
return(
	<main className={styles.fixedTop}>
		<div className={styles.Container}>
			<h1>Inbox<FontAwesomeIcon icon={faMessage} className={styles.icon}/></h1>
			<p>select</p>
			<div className={styles.AudioPadding}>
			<Audio source={Human} styling={styles.Audio}/>
			</div>
		</div>
		
	</main>
)
}

export default FixedTop;
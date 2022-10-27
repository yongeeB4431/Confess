import style from "../../../styles/Message/Header.module.css"
import Audio from "../Home/Audio";
import AnotherLove from "../../static/audio/Tom Odell - Another Love (Official Video).mp3"
import styles from "../../../styles/Home/Title.module.css";


function Header({time, day, date}){
	return(
		<div className={style.container}>
		<h2><span className={style.time}>{time}</span><span className={style.day}>{day},</span> {date}</h2>
		<Audio source={AnotherLove} styling={styles.Audio}/>
		</div>
	)
}

export default Header;
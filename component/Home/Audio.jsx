import {useState} from 'react';
import {
	faPlay,
	faPause,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactHowler from "react-howler"
import style from "../../styles/Home/Audio.module.css"


function Audio(props){
	let [play, setPlay] = useState(false)
	const handlePlayPause = () => setPlay(!play)
	return(
		<div className={props.styling}>
			<ReactHowler src={props.source} playing={play} onEnd={()=>setPlay(false)}/>
			<FontAwesomeIcon icon={play ? faPause : faPlay}
		 color="crimson" 
		 onClick={handlePlayPause}
		 className={style.playPause}
		 />
		</div>
	)

}

export default Audio;
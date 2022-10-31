import {useState, useRef, useEffect} from 'react';
import {
	faPlay,
	faPause,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "../../styles/Home/Audio.module.css"


function Audio(props){
	let [play, setPlay] = useState(false)
	let audioEl = useRef(null)
	const handlePlayPause = () => setPlay(!play)

	useEffect(()=>{
		play ? audioEl.current.play() : audioEl.current.pause()
	}, [play])
	return(
		<div className={props.styling}>
			<audio src={props.source} ref={audioEl} onEnded={()=>setPlay(false)}/>
			<FontAwesomeIcon icon={play ? faPause : faPlay}
		 color="crimson" 
		 onClick={handlePlayPause}
		 className={style.playPause}
		 />
		</div>
	)

}

export default Audio;
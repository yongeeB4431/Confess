import {
	faHistory,
	faPenToSquare
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "../../../styles/Message/EditFavorite.module.css"

function EditFavorite({editHistory}){
	console.log(editHistory)
	let editLength = editHistory.length == 0 ? "none" : editHistory.length
	return(
		<div className={style.container}>
			<span className={style.edited}><FontAwesomeIcon icon={faPenToSquare} className={style.edit} color="crimson"/>Edited: <span className={style.number}>{editLength}</span></span>
			<FontAwesomeIcon icon={faHistory} className={style.history} />
		</div>
	)
}

export default EditFavorite;
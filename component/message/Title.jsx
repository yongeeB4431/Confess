import Link from "next/link";
import style from "../../styles/Message/Title.module.css"
import {
	faHistory
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Title({title, editHistory, id}){
	return (
		<div className={style.container}>
			<Link href={`/edit/${id}`}>
			<FontAwesomeIcon icon={faHistory} color="green" className={style.history}/>
			</Link>
			<h1 className={style.title}>{title}</h1>
			<Link href={{
				pathname: "/write",
				query: {id}
			}}>
			<span className={style.edit}>edit</span>
			</Link>
		</div>
	)
}

export default Title;
import style from "../../styles/Message/Confession.module.css"

function Confession({confession}){
	return(
		<div className={style.container}>
			<p>
				{confession}
			</p>
		</div>
	)
}

export default Confession;
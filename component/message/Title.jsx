import style from "../../styles/Message/Title.module.css"
function Title({title}){
	return (
		<div className={style.container}>
			<h1>{title}</h1>
		</div>
	)
}

export default Title;
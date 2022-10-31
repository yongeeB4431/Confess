import {useState} from "react";
import styles from "../../styles/Input/Input.module.css"
function Input({inputProps, setActiveNavBar, editConfession}){
	const {title, yourConfession, setTitle, setYourConfession} = inputProps;
	let tCC =	title.length >= 7 ? true : false;
	let cCC = yourConfession.length >= 10 ? true : false
	const [tC, setTc] = useState(tCC)
	const [cC, setCc] = useState(cCC)

	const handleChangeTitle = e => {
		setTitle(e.target.value)
		title.length >= 7 ? setTc(true) :setTc(false);

	}

	const handleChangeCofession = e => {
		setYourConfession(e.target.value)
		yourConfession.length >= 10 ? setCc(true) : setCc(false);
		
	}

	const handleFocus = () => setActiveNavBar(false)
	

	const handleBlur = () => setActiveNavBar(true)

	let obj = Object.keys(editConfession).length === 0

return(
	<main className={styles.container}>
		<input placeholder="title" onChange={handleChangeTitle} value={title} onFocus
		={handleFocus} onBlur={handleBlur} disabled={!obj} />
		{!tC && title.length > 0 ? <h5>Title length should be more than or equal to 7 </h5> : <></>}
		<div>
		<textarea
		placeholder="your confession...." value={yourConfession} onChange={handleChangeCofession} onFocus
		={handleFocus} onBlur={handleBlur} />
		</div>
		{!cC && yourConfession.length > 0 ? <h5>your Confession length should be more than or equal to 10 </h5> : <></>}
	</main>
)
}

export default Input;
import {useRef} from "react";
import styles from "../../../styles/Input/Input.module.css"
function Input(props){
	const {data, setData} = props;
	const handleChangeTitle = e => {
		setData(data=>({...data, title: e.target.value }))

	}

	const handleChangeCofession = e => {
		setData(data=>({...data, yourConfession: e.target.value }))
	}
return(
	<main className={styles.container}>
		<input placeholder="title" onChange={handleChangeTitle} value={data.title} />
		<div>
		<textarea
		placeholder="your confession...." value={data.yourConfession} onChange={handleChangeCofession}/>
		</div>

	</main>
)
}

export default Input;
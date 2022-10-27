import {useState} from "react";
import styles from "../../../styles/Input/Input.module.css"
function Input(props){
	const {data, setData} = props;

	// Title Confession length confirmation
	const [TCLC, setTCLC] = useState({
		tC: false,
		cC: false
	}) 
	const handleChangeTitle = e => {
		e.target.value.length >= 7 ? setTCLC((T)=>({...T,tC: true})) : setTCLC((T)=>({...T, tC:false}));
		setData(data=>({...data, title: e.target.value }))

	}

	const handleChangeCofession = e => {
		e.target.value.length >= 10 ? setTCLC((T)=>({...T,cC: true})) : setTCLC((T)=>({...T, cC:false}));
		setData(data=>({...data, yourConfession: e.target.value }))
	}

return(
	<main className={styles.container}>
		<input placeholder="title" onChange={handleChangeTitle} value={data.title} />
		{!TCLC.tC && data.title.length > 0 ? <h5>Title length should be more than or equal to 7 </h5> : <></>}
		<div>
		<textarea
		placeholder="your confession...." value={data.yourConfession} onChange={handleChangeCofession} />
		</div>
		{!TCLC.cC && data.yourConfession.length > 0 ? <h5>your Confession length should be more than or equal to 10 </h5> : <></>}
	</main>
)
}

export default Input;
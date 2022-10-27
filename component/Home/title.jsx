import styles from "../../styles/Home/Title.module.css";


function Title(props){
	return(
		<div className={styles.titleContainer}>
		{props.leftSide}
		<div className={styles.title}>
			<span>C</span>
			<span>o</span>
			<span>n</span>
			<span>f</span>
			<span>e</span>
			<span>s</span>
			<span>s</span>
			<span>i</span>
			<span>o</span>
			<span>n</span>
		</div>
		{props.children}
		</div>
	)
}

export default Title;
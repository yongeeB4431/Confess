import style from '../../styles/Home/Image.module.css'
import Confess from "./Confession";

function Img(){
	return(
		<div style={{height: "65vh", overflowY: "scroll"}}>
		 <div className={style.image}>
		  <Confess /> 
		</div>
		</div>
		
	)
}

export default Img;
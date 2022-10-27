import Confession from "./Confession";
 import EditFavorite from "./EditFavorite";
import Header from "./Header";
import Title from "./Title";
import BottomNav from "../Home/BottomNavigator";
import style from "../../../styles/Message/Message.module.css"

function Message({confession}){
	const {time, day, date, editHistory, title, yourConfession} = confession;
	console.log(confession)
	return (
		<main className={style.container}>
			<Header time={time} day={day} date={date}/>
			<EditFavorite editHistory={editHistory} />
			<Title title={title}/>
			<Confession confession={yourConfession}/>
			<BottomNav />
		</main>
	)
}


export default Message;
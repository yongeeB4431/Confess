import Head from "next/head"
import Header from "./Header"
import EditMessages from "./EditMessages";
import BottomNav from "../Home/BottomNavigator";
function Edit({history}){
	const {title, editHistory, _id} = history;
return(
	<>
	<Head>
		<title>Edit Confession</title>
	</Head>
	<Header title={title} editLength={editHistory.length} id={_id} />
	<EditMessages editHistory={editHistory} />
	<BottomNav />
	</>
)
}

export default Edit
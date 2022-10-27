import BottomNav from '../Home/BottomNavigator';
import Confessions from "./Confessions";
import FixedTop from "./FixedTop";



function Diary({data}){
return(
	<>
	<FixedTop />
	<div style={{height: "73vh",overflowY: "scroll"}}>
	<Confessions confessions={data} />
	</div>
	<BottomNav />
	</>
)
}




export default Diary;
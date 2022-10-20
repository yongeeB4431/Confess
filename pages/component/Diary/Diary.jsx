import {useRouter} from 'next/router'
import Confessions from "./Confessions";
import FixedTop from "./FixedTop";


function Diary(){
	const router = useRouter()
	const data = router.query;
	console.log(data);
return(
	<>
	<FixedTop />
	<Confessions />
	<Confessions />
	<Confessions />
	</>
)
}

export default Diary;
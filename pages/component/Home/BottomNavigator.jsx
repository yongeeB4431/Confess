import Link from 'next/link'
import { useRouter } from 'next/router';
import style from "../../../styles/Home/BottomNavigator.module.css"
import {
	faHome,
	faBook,
	faPencil,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function BottomNav(){
	const router = useRouter()
	console.log(router.pathname)

return(
	<main className={style.NavContainer}>
		<div className={style.Nav}>
			<Link href="/">
				<a>
					<FontAwesomeIcon icon={faHome} color="crimson" className={router.pathname == '/' ? `${style.Icon} ${style.active}` : style.Icon }  />
					<h4 className={router.pathname == '/' ? style.Active : ""}>home</h4>
				</a>
			</Link>
			<Link href="/diary">
				<a>
					<FontAwesomeIcon icon={faBook} color="crimson" className={router.pathname == '/diary' ? `${style.Icon} ${style.active}` : style.Icon }  />
					<h4 className={router.pathname == '/diary' ? style.Active : ""}>diary</h4>
				</a>
			</Link>
			<Link href="/write">
				<a>
					<FontAwesomeIcon icon={faPencil} color="crimson" className={router.pathname == '/write' ? `${style.Icon} ${style.active}` : style.Icon }  />
					<h4 className={router.pathname == '/write' ? style.Active : ""}>write</h4>
				</a>
			</Link>
		</div>
	</main>
)
}

export default BottomNav;
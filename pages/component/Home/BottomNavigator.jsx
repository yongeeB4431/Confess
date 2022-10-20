import Link from 'next/link'
import style from "../../../styles/Home/BottomNavigator.module.css"
import {
	faHome,
	faBook,
	faMusic,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Nav(){
return(
	<div className={style.container}>
	<main className={style.Navbar}>
		<nav>
			<ul>
				<Link href="/">
					<FontAwesomeIcon icon={faHome}
					className={`${style.icon} ${style.homeIcon}`}
					/>
				</Link>
				<Link href="/diary">
				<FontAwesomeIcon icon={faBook}
				className={`${style.icon} ${style.diaryIcon}`}
					/>
				
				</Link>
				<Link href="/">
				<FontAwesomeIcon icon={faMusic}
					className={`${style.icon} ${style.musicIcon}`}
					/>
				</Link>
			</ul>
		</nav>
	</main>
	</div>
)
}

export default Nav;
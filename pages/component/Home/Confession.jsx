import { Typewriter } from 'react-simple-typewriter';
import style from "../../../styles/Home/Typing.module.css"
let confession = [
	"As dark as I am",
	"I will always find enough light",
	"to adore you to pieces with every part of me.",
	"To say I don't admire you --",
	"it wouldn't be true.",
	"I'm afraid of that day,",
	"the day I would cease to exist in your mind.",
	"for this day not to exist,",
	"I have decided to write some pieces",
	"which lips dare not say",
	"so as to stay in your mind forever.",
	"This is my Confession"
]
function Confess(){
	let speed = confession[0].length;
return(
	<>
	<div className={style.typing}>
		<p>
			<Typewriter words={[confession[0]]}
			typeSpeed={70}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[1]]}
			typeSpeed={70}
			delaySpeed={70 * 19}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[2]]}
			typeSpeed={70}
			delaySpeed={70 * 58}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[3]]}
			typeSpeed={70}
			delaySpeed={70 * 120}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[4]]}
			typeSpeed={70}
			delaySpeed={70 * 170}
			/>
		</p>
		<br></br>
		<p>
			<Typewriter words={["", confession[5]]}
			typeSpeed={70}
			delaySpeed={70 * 200}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[6]]}
			typeSpeed={70}
			delaySpeed={70 * 230}
			/>
		</p>
		
		<p>
			<Typewriter words={["", confession[7]]}
			typeSpeed={70}
			delaySpeed={70 * 280}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[8]]}
			typeSpeed={70}
			delaySpeed={70 * 310}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[9]]}
			typeSpeed={70}
			delaySpeed={70 * 350}
			/>
		</p>
		<p>
			<Typewriter words={["", confession[10]]}
			typeSpeed={70}
			delaySpeed={70 * 380}
			/>
		</p>
	</div>
	</>
)
}
export default Confess;
import { Typewriter } from "react-simple-typewriter";
import style from "../../styles/Home/Typing.module.css";
let words = [
  "As dark as I am\nI will always find enough light\nTo adore you to pieces \nWith every part of me\nTo say I don't admire you --\nIt wouldn't be true\n\nI'm afraid of that day\nThe day I would cease to exist in your mind\nFor this day not to exist\nI have decided to write some pieces\nWhich lips dare not say\nSo as to stay in your mind forever",
];
function Confess() {
  return (
    <>
      <div className={style.typing}>
        <p style={{ whiteSpace: "pre-line" }}>
          <Typewriter typeSpeed={100} words={[words[0]]} />
        </p>
      </div>
    </>
  );
}
export default Confess;

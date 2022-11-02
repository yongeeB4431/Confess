import { useState } from "react";
import styles from "../../styles/Input/Input.module.css";
function Input({ setActiveNavBar, data, setYourConfession, yourConfession }) {
  const cC = yourConfession.length >= 10;

  const handleChangeCofession = (e) => {
    setYourConfession(e.target.value);
  };

  const handleFocus = () => setActiveNavBar(false);

  const handleBlur = () => setActiveNavBar(true);

  return (
    <main className={styles.container}>
      <input
        placeholder="title"
        value={data.title}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled
      />
      <div>
        <textarea
          placeholder="your confession...."
          value={yourConfession}
          onChange={handleChangeCofession}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {!cC && yourConfession.length > 0 ? (
        <h5>your Confession length should be more than or equal to 10 </h5>
      ) : (
        <></>
      )}
    </main>
  );
}

export default Input;

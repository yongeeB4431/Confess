import styles from "../../styles/Edit/EditMessages.module.css";
import style from "../../styles/Home/Image.module.css";
function EditMessages({ editHistory }) {
  return (
    <>
      <div className={style.scrollBar}>
        <div className={styles.container}>
          {editHistory.map((edit, index) => {
            return (
              <div key={edit._id}>
                <h3
                  style={{
                    textAlign: "center",
                    color: "whiteSmoke",
                    opacity: "70%",
                  }}
                >
                  History {index + 1}
                </h3>
                <div className={styles.message}>
                  <p
                    className={styles.confession}
                    style={{ fontFamily: "Fira Code" }}
                  >
                    {edit.yourConfession}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EditMessages;

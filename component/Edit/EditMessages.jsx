import styles from "../../styles/Edit/EditMessages.module.css";
import style from "../../styles/Home/Image.module.css";
function EditMessages({ editHistory }) {
  return (
    <>
      <div className={style.scrollBar}>
        <div className={styles.container}>
          {editHistory.map((edit) => {
            return (
              <div key={edit._id}>
                <div className={styles.dateTime}>
                  <h3 className={styles.date}>
                    {edit.day}, {edit.date}
                  </h3>
                  <h5 className={styles.time}>{edit.time}</h5>
                </div>
                <div className={styles.message}>
                  <p className={styles.confession}>{edit.yourConfession}</p>
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

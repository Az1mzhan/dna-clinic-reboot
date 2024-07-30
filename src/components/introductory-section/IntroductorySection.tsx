import { FC } from "react";
import expert from "../../assets/expert.svg";
import buttonAdornment from "../../assets/button_adornment.svg";
import styles from "./introductorySection.module.css";

export const IntroductorySection: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.slogan}>
              Позаботьтесь о здоровье всей семьи с самого начала жизни и на
              протяжении всего пути!
            </h1>
            <p className={styles.title}>
              Лучшая частная клиника в городе Актау
            </p>
          </div>
          <button className={styles.makeAppointmentBtn}>
            Записаться на прием
            <img
              src={buttonAdornment}
              alt="buttonAdornment"
              width={62}
              height={62}
            />
          </button>
        </div>
        <img src={expert} alt="expert" width={340} height={388} />
      </div>
    </>
  );
};

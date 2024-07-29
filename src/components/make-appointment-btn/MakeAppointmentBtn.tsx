import { FC } from "react";
import styles from "./make-appointment-btn.module.css";


export const MakeAppointmentBtn: FC = () => {
  return (
    <>
      <button className={styles.makeAppointmentBtn}>
        Записаться на прием
      </button>
    </>
  );
};

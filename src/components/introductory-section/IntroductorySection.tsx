import { FC } from "react";
import { Box } from "@mui/material";
import expert from "../../assets/expert.svg";
import buttonAdornment from "../../assets/button_adornment.svg";
import styles from "./introductorySection.module.css";
import { MakeAppointmentBtn } from "../make-appointment-btn/MakeAppointmentBtn";

export const IntroductorySection: FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.mainContent}>
          <Box className={styles.textContainer}>
            <p className={styles.slogan}>
              Позаботьтесь о здоровье всей семьи с самого начала жизни и на
              протяжении всего пути!
            </p>
            <p className={styles.title}>
              Лучшая частная клиника в городе Актау
            </p>
          </Box>
          <MakeAppointmentBtn introductory={true}/>
        </Box>
        <img className={styles.expert} src={expert} alt="expert" width={340} height={388} />
      </Box>
    </>
  );
};

import { FC } from "react";
import { Box } from "@mui/material";
import expert from "../../assets/expert.svg";
import styles from "./introductorySection.module.css";
import { MakeAppointmentBtn } from "../make-appointment-btn/MakeAppointmentBtn";

export const IntroductorySection: FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.mainContent}>
          <Box className={styles.textContainer}>
            <p className={styles.slogan}>
              Следите за здоровьем с "ДНК", забота о себе и близких превыше
              всего!
            </p>
            <p className={styles.title}>Частная клиника №1 в Актау</p>
          </Box>
          <MakeAppointmentBtn introductory={true} />
        </Box>
        <img
          className={styles.expert}
          src={expert}
          alt="expert"
          width={340}
          height={388}
        />
      </Box>
    </>
  );
};

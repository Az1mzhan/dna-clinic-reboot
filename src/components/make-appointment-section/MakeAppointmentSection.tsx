import { FC } from "react";
import { defaultAppointmentCards } from "../../types/AppointmentCard";
import { Box } from "@mui/material";
import arrow from "../../assets/arrow.svg";
import styles from "./MakeAppointmentSection.module.css"
import { MakeAppointmentBtn } from "../make-appointment-btn/MakeAppointmentBtn";

export const MakeAppointmentSection: FC = () => {
  return (
    <>
      <Box className={styles.makeAppointmentContainer}>
        <p className={styles.title}>Как легко записаться на прием</p>
        <Box className={styles.appointmentCardsContainer}>
          {defaultAppointmentCards.map((card, id) => (
            <Box key={id} className={styles.appointmentCard}>
              <p className={styles.cardStep}>Шаг {id + 1}</p>
              <p className={styles.cardTitle}>{card.title}</p>
              <Box>
                {card.paragraphs.map((paragraph, id) => (
                  <p key={id} className={styles.cardParagraph}>{paragraph}</p>
                ))}
              </Box>
              {id<2 && <img className={styles.arrow} src={arrow} alt="arrow" />}
            </Box>
          ))}
        </Box>
        <MakeAppointmentBtn/>
      </Box>
    </>
  );
};

import { FC } from "react";
import { Box } from "@mui/material";
import styles from "./healthReminding.module.css";
import { MakeAppointmentBtn } from "../make-appointment-btn/MakeAppointmentBtn";

export const HealthReminding: FC = () => {
  const paragraphs = [
    'Человеческому организму необходимо регулярное наблюдение у врача, во избежание различных заболеваний и для предотвращения патологий на ранних стадиях. "ДНК" клиник обеспечит своим пациентам удобное пользование медицинскими услугами и безупречное здоровье.',
    "\n",
    "В здоровом теле здоровый дух.                                                     ",
  ];

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.textContainer}>
          <p className="blueTitle">Не забывайте о здоровье</p>
          <p className="blueSubtitle">
            Когда вы в последний раз проходили осмотр?
          </p>
          <Box className={styles.paragraphsContainer}>
            {paragraphs.map((paragraph, id) => (
              <p key={id}>{paragraph}</p>
            ))}
          </Box>
        </Box>
        <MakeAppointmentBtn />
      </Box>
    </>
  );
};

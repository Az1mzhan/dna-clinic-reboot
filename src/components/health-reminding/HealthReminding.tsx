import { FC } from "react";
import { Box } from "@mui/material";
import styles from "./healthReminding.module.css";

export const HealthReminding: FC = () => {
  const paragraphs = [
    "Каждый месяц становится все сложнее записываться на медицинские приемы. Новые медицинские регламенты, увеличивающаяся нагрузка на пациентов и развивающиеся медицинские практики могут затруднять контроль за вашим здоровьем.",
    "\n",
    "Мы считаем, что пациенты должны сосредоточиться на своем благополучии, а не тратить время на записи и очереди.",
    "\n",
    "Ваше здоровье — наш приоритет.",
  ];

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.textContainer}>
          <p className={styles.title}>Не забывайте о здоровье</p>
          <p className={styles.subtitle}>
            Когда вы в последний раз проходили осмотр?
          </p>
          <Box className={styles.paragraphsContainer}>
            {paragraphs.map((paragraph, id) => (
              <p key={id}>{paragraph}</p>
            ))}
          </Box>
        </Box>
        <button className={styles.makeAppointmentBtn}>
          Записаться на прием
        </button>
      </Box>
    </>
  );
};

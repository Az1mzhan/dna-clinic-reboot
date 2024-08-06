import { FC } from "react";
import { defaultServicesCards } from "../../types/ServiceCard";
import { Box } from "@mui/material";
import styles from "../services-grid/servicesGrid.module.css";
import { useMediaQuery } from "usehooks-ts";

export const ServicesGrid: FC = () => {
  const smallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <Box className={styles.container}>
        <p className="blueTitle" style={{ marginTop: "90px" }}>
          {!smallScreen ? "Какие у нас услуги" : "Услуги"}
        </p>
        <Box className={styles.cardsContainer}>
          {defaultServicesCards.map((service, id) => (
            <Box key={id} className={styles.card}>
              <img
                src={service.icon}
                alt={service.title}
                width={91}
                height={119}
              />
              <p className={styles.cardTitle}>{service.title}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

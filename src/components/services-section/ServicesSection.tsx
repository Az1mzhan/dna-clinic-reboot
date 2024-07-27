import { FC } from "react";
import { ServicesGrid } from "../services-grid/ServicesGrid";
import { EquipmentGrid } from "../equipment-grid/EquipmentGrid";
import { Box } from "@mui/material";
import styles from "./servicesSection.module.css";

export const ServicesSection: FC = () => {
  return (
    <>
      <Box className={styles.sectionContainer}>
        <ServicesGrid />
        <EquipmentGrid />
      </Box>
    </>
  );
};

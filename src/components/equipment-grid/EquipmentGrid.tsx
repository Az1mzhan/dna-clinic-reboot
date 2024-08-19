import { FC } from "react";
import { Equipment, defaultEquipment } from "../../types/Equipment";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import styles from "./equipmentGrid.module.css";
import { MakeAppointmentBtn } from "../make-appointment-btn/MakeAppointmentBtn";

interface Props {
  equipmentItems: Equipment[];
}

export const EquipmentGrid: FC<Props> = ({
  equipmentItems = Array(3).fill(defaultEquipment),
}) => {
  return (
    <>
      <Box className={styles.equipmentGridContainer}>
        <p className="blueTitle" style={{ margin: "90px 0 60px" }}>
          Медицинское оборудование "ДНК" клиник
        </p>
        <Box className={styles.cardsContainer}>
          {equipmentItems.map((item, id) => (
            <Card key={id} className={styles.equipmentCard}>
              <CardMedia component="img" image={item.icon} />
              <CardContent>
                <p>{item.naming}</p>
                <ul>
                  {item.features.map((feature, id) => (
                    <li key={id}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Box>
        <MakeAppointmentBtn />
      </Box>
    </>
  );
};

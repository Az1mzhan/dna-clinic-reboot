import { defaultMedics } from "../../types/Medic";
import {
  Avatar,
  Box,
  FormGroup,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from './MedicsTable.module.css'

export const MedicsTable = () => {
  return (
    <div className={styles.medicsPage}>
      <p className={styles.title}>Наши врачи</p>
      <p className={styles.titledesc}>Наши врачи - наша гордость!</p>
      <Box className={styles.medicsForm} component={Paper}>
        <FormGroup>
          <TextField
            label="Имя, должность, опыт работы"
            variant="outlined"
          />
          <TextField label="Фильтр по сведению" variant="outlined"/>
        </FormGroup>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Полное имя</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Опыт работы</TableCell>
                <TableCell>Прием</TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultMedics.map((medic, id) => (
                <TableRow className={styles.tableRow} key={id}>
                  <TableCell className={styles.medicAvatar}>
                    <Avatar src={medic.avatar} alt={medic.fullName}/>
                    <p>{medic.fullName}</p>
                  </TableCell>
                  <TableCell>{medic.profession}</TableCell>
                  <TableCell>{medic.experience}</TableCell>
                  <TableCell>
                    <button className={medic.receptionType === "free" ? styles.medicCost : styles.medicCostPaid}>
                      {medic.receptionType === "free"
                        ? "Бесплатный"
                        : "Платный"}
                    </button>
                  </TableCell>
                  <TableCell>
                    <div className={styles.medicMore}>
                      <Link>Подробнее</Link>
                      <ArrowForwardIosIcon />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

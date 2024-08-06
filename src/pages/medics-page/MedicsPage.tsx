import { FC, useState } from "react";
import { defaultMedics } from "../../types/Medic";
import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../components/medics-table/MedicsTable.module.css";

const MedicsPage: FC = () => {
  const [filter, setFilter] = useState<string>("Не выбрано");

  const handleFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  const tableColumnHeaders = [
    "Полное имя",
    "Должность",
    "Опыт работы",
    "Прием",
    "",
  ];

  return (
    <div className={styles.medicsPage}>
      <p className={styles.title}>Наши врачи</p>
      <p className={styles.titledesc}>Наши врачи - наша гордость!</p>
      <Box className={styles.medicsForm} component={Paper}>
        <div className={styles.formInput}>
          <TextField
            className={styles.input}
            label="Имя, должность, опыт работы"
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="filterLabel">Фильтр по сведению</InputLabel>
            <Select
              className={styles.input}
              labelId="filterLabel"
              label="Фильтр по сведению"
              value={filter}
              onChange={handleFilter}
            >
              {[
                "Не выбрано",
                ...tableColumnHeaders.filter((header) => header !== ""),
              ].map((filter, id) => (
                <MenuItem key={id} value={filter}>
                  {filter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableColumnHeaders.map((columnHeader, id) => (
                  <TableCell key={id}>{columnHeader}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultMedics.map((medic, id) => (
                <TableRow className={styles.tableRow} key={id}>
                  <TableCell className={styles.medicAvatar}>
                    <Avatar src={medic.avatar} alt={medic.fullName}></Avatar>
                    <p>{medic.fullName}</p>
                  </TableCell>
                  <TableCell>{medic.profession}</TableCell>
                  <TableCell>{medic.experience}</TableCell>
                  <TableCell>
                    <button
                      className={
                        medic.receptionType === "free"
                          ? styles.medicCost
                          : styles.medicCostPaid
                      }
                    >
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

export default MedicsPage;

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

export const MedicsTable = () => {
  return (
    <>
      <Box>
        <p>Наши врачи</p>
        <p>Наши врачи - наша гордость!</p>
        <FormGroup>
          <TextField
            label="Имя, должность, опыт работы"
            variant="outlined"
          ></TextField>
          <TextField label="Фильтр по сведению" variant="outlined"></TextField>
        </FormGroup>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Полное имя</TableCell>
                <TableCell>Должность</TableCell>
                <TableCell>Опыт работы</TableCell>
                <TableCell>Прием</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultMedics.map((medic, id) => (
                <TableRow key={id}>
                  <TableCell>
                    <Avatar src={medic.avatar} alt={medic.fullName}></Avatar>
                    <p>{medic.fullName}</p>
                  </TableCell>
                  <TableCell>{medic.profession}</TableCell>
                  <TableCell>{medic.experience}</TableCell>
                  <TableCell>
                    <button>
                      {medic.receptionType === "free"
                        ? "Бесплатный"
                        : "Платный"}
                    </button>
                  </TableCell>
                  <TableCell>
                    <Link>Подробнее</Link>
                    <ArrowForwardIosIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

import { FC } from "react";
import { defaultAppointmentCards } from "../../types/AppointmentCard";
import { Box } from "@mui/material";
import arrow from "../../assets/arrow.svg";

export const MakeAppointmentSection: FC = () => {
  return (
    <>
      <Box>
        <p>Как легко записаться на прием</p>
        <Box>
          {defaultAppointmentCards.map((card, id) => (
            <Box>
              <p>{id + 1}</p>
              <p>{card.title}</p>
              <Box>
                {card.paragraphs.map((paragraph, id) => (
                  <p key={id}>{paragraph}</p>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          {Array.from({ length: defaultAppointmentCards.length }).map(
            (item, id) => (
              <img key={id} src={arrow} alt="arrow" />
            )
          )}
        </Box>
        <button>Записаться на прием</button>
      </Box>
    </>
  );
};

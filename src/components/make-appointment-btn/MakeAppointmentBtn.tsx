import { FC, useState } from "react";
import styles from "./make-appointment-btn.module.css";
import { MeetingPopUp } from "../meeting-popup/MeetingPopUp";
import buttonAdornment from "../../assets/button_adornment.svg";

interface Props {
  introductory: boolean;
}

export const MakeAppointmentBtn: FC<Props> = ({ introductory }: Props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  function show() {
    if (showPopUp) {
      setShowPopUp(false);
      document.body.classList.remove("popUp");
    } else {
      setShowPopUp(true);
      document.body.className += "popUp";
    }
  }
  if (introductory) {
    return (
      <>
        <button className={styles.makeAppointmentBtn} onClick={show}>
          Записаться на прием
        </button>
        {showPopUp && <MeetingPopUp show={show} />}
      </>
    );
  } else {
    return (
      <>
        <button className={styles.makeAppointmentBtnIntr} onClick={show}>
          Записаться на прием
          <img
            src={buttonAdornment}
            alt="buttonAdornment"
            width={62}
            height={62}
          />
        </button>
        {showPopUp && <MeetingPopUp show={show} />}
      </>
    );
  }
};

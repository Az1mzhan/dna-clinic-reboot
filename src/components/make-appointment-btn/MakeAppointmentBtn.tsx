import { FC, useState } from "react";
import styles from "./make-appointment-btn.module.css";
import { MeetingPopUp } from "../meeting-popup/MettingPopUp";
import buttonAdornment from "../../assets/button_adornment.svg";

export const MakeAppointmentBtn: FC = (props) => {
  const [showPopUp, setShowPopUp] = useState(false)

  function show(){
    if (showPopUp){
      setShowPopUp(false)
      document.body.classList.remove('popUp')
    } else {
      setShowPopUp(true)
      document.body.className += 'popUp'
    }
  }
  if (props.introductory==undefined){
    return (
      <>
        <button className={styles.makeAppointmentBtn} onClick={show}>
          Записаться на прием
        </button>
        {showPopUp && <MeetingPopUp setShowPopUp={setShowPopUp}/>}
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
        {showPopUp && <MeetingPopUp show={show}/>}
      </>
    );
  }
};

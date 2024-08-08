import { FC } from "react";
import styles from "./MeetingPopUp.module.css";

export const MeetingPopUp: FC = (props) => {
  return (
    <div className={styles.popUp} onClick={props.show}>
      <iframe id="amoforms_iframe_1388914" name="amoforms_iframe_1388914" className={styles.content} src='https://forms.amocrm.ru/forms/html/form_1388914_2a52ac8f1b35dd70ef2a181d7132f5e2.html?date=1723044898#{"form_id":"1388914","form_hash":"2a52ac8f1b35dd70ef2a181d7132f5e2","user_origin":{"datetime":"Wed Aug 07 2024 20:34:58 GMT+0500 (West Kazakhstan Time)","referer":"https://ulanaitbay67.amocrm.ru/"},"is_modal":false,"success_message":"%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%B8%D0%BC,%20%D1%87%D1%82%D0%BE%20%D0%B2%D1%8B%D0%B1%D1%80%D0%B0%D0%BB%D0%B8%20%D0%BD%D0%B0%D1%81!%20%D0%9C%D1%8B%20%D1%81%D0%B2%D1%8F%D0%B6%D0%B5%D0%BC%D1%81%D1%8F%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D0%BC%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8.%20%D0%92%D1%81%D1%91%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%20%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE!","has_redirect":"","is_dark_bg":true,"utm":{"source":"","medium":"","content":"","campaign":"","term":""},"ga":{},"location":"https://forms.amocrm.ru/rtmmxrd","dp":{}}'></iframe>
    </div>
  );
};

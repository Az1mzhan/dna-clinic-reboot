import { FC } from "react";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import styles from "./aboutUsPage.module.css";

interface CompanyInfoDetail {
  title: string;
  info: string;
}

const AboutUsPage: FC = () => {
  const companyInfo: CompanyInfoDetail[] = [
    {
      title: "Адрес",
      info: "19 мкр, ЖК «Ханшайым», 4 офис.",
    },
    {
      title: "Записаться на приём",
      info: "+7 702 301 2796",
    },
    {
      title: "Горячая линия 1",
      info: "+7 777 777 77 77",
    },
    {
      title: "Горячая линия 2",
      info: "+7 777 777 77 77",
    },
  ];

  return (
    <div className={`gradientBg ${styles.aboutUsPage}`}>
      <div className="contentContainer">
        <h1 className="pageTitle">О нас</h1>
        <h2 className="pageDescription">
          Здесь вы можете найти наши адреса, а также контакты для связи.
        </h2>
        <div className={styles.companyInfoContainer}>
          <YMaps>
            <Map
              className={styles.map}
              defaultState={{ center: [43.678556, 51.158031], zoom: 17 }}
            >
              <Placemark geometry={[43.678556, 51.158031]} />
              <ZoomControl />
            </Map>
          </YMaps>
          <div className={styles.companyTextInfoContainer}>
            {companyInfo.map((detail, id) => (
              <div key={id}>
                <h4 className={styles.companyInfoTitle}>{detail.title}:</h4>
                <p
                  className={
                    detail.info.startsWith("+7")
                      ? styles.contactPhone
                      : styles.companyInfo
                  }
                >
                  {detail.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

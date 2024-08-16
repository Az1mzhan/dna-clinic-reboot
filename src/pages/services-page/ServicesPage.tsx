import { FC, useCallback, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { MakeAppointmentBtn } from "../../components/make-appointment-btn/MakeAppointmentBtn";
import { MenuSection } from "../../components/menu-section/MenuSection";
import { defaultAnalysesActionCards } from "../../types/AnalysisActionCard";
import { defaultAnalysesGroups } from "../../types/AnalysesGroup";
import { defaultAnalysesMiniCards } from "../../types/AnalysisMiniCard";
import { defaultMenus } from "../../types/Menu";
import { defaultServiceBanners } from "../../types/ServiceBanner";
import Carousel from "react-material-ui-carousel";
import styles from "./servicesPage.module.css";
import ReactPlayer from "react-player";

const ServicesPage: FC = () => {
  const [height, setHeight] = useState<number>(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const smallScreen = useMediaQuery("(max-width: 1167px)");

  return (
    <>
      <div className={styles.container + " gradientBg"}>
        <h1 className={styles.containerTitle}>Наши услуги</h1>
        <h2 className={styles.containerSubtitle}>
          Наши услуги надежные и точные.
        </h2>
        <div className={styles.miniCardsContainer}>
          {defaultAnalysesMiniCards.map((card, id) => (
            <div
              className={styles.miniCard}
              key={id}
              style={{ background: card.bgColor }}
            >
              <img
                src={card.icon}
                alt={card.title}
                width={card.iconWidth}
                height={card.iconHeight}
              />
              <h3 className={styles.miniCardTitle}>{card.title}</h3>
            </div>
          ))}
        </div>
        <div className={styles.analysesActionCardsContainer}>
          {defaultAnalysesActionCards.map((card, id) => (
            <div className={styles.analysisActionCard} key={id}>
              <h2 className={styles.analysisActionCardTitle}>{card.title}</h2>
              <div className={styles.analysisActionCardMainContent}>
                <div>
                  <h4 className={styles.analysisActionCardSubtitle}>
                    {card.subtitle}
                  </h4>
                  <button className={styles.analysisActionDetailsBtn}>
                    Подробнее
                  </button>
                </div>
                <img
                  src={card.icon}
                  alt={card.title}
                  width={card.iconWidth}
                  height={card.iconHeight}
                />
              </div>
            </div>
          ))}
        </div>
        <MakeAppointmentBtn styleProps={{ margin: "69px 0 108px" }} />
      </div>
      <div className={styles.container}>
        <h2
          className={
            styles.sectionTitle + " " + styles.specialistsConsultationTitle
          }
        >
          Консультации специалистов
        </h2>
        <MenuSection menu={defaultMenus[0]} />
        <MakeAppointmentBtn styleProps={{ margin: "79px 0 67px" }} />
      </div>
      <div className={styles.container + " gradientBg"}>
        <h2 className={styles.sectionTitle + " " + styles.ourLaboratoryTitle}>
          Наша лаборатория
        </h2>
        <div className={styles.ourLaboratoryMainContent}>
          <div className={styles.ourLaboratoryTextContainer} ref={measuredRef}>
            <h3>
              Сеть многопрофильных медицинских центров ДНК располагает
              собственной лабораторией.
            </h3>
            <p>
              Высокоточное оборудование последнего поколения, используемое в
              нашей лаборатории, позволяет проводить исследования в
              автоматическом режиме и в кратчайшие сроки, что сводит к минимуму
              вероятность ошибок, обусловленных «человеческим фактором». На всех
              этапах клинических лабораторных исследований осуществляется
              строгий контроль качества.
            </p>
            <p>
              Подробную информацию о техническом оснащении и работе лаборатории
              вы можете посмотреть на странице Лабораторно-диагностический центр
            </p>
          </div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=u31qwQUeGuM&pp=ygURcGxhY2Vob2xkZXIgdmlkZW8%3D"
            controls={true}
            width={557}
            height={smallScreen ? 300 : height}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle + " " + styles.popularAnalysesTitle}>
          Популярные анализы
        </h2>
        <div className={styles.groupsContainer}>
          {defaultAnalysesGroups.map((group, id) => (
            <div className={styles.analysesGroup} key={id}>
              <h3 className={styles.groupTitle}>{group.groupTitle}</h3>
              <hr />
              <div className={styles.analysesNamingsList}>
                {group.analysesNamings.map((naming, id) => (
                  <a className={styles.analysisNaming} key={id}>
                    {naming}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2
          className={
            styles.sectionTitle + " " + styles.laboratoryAnalysesTypesTitle
          }
        >
          Виды лабораторных анализ и исследований
        </h2>
        <MenuSection menu={defaultMenus[1]} />
        <MakeAppointmentBtn styleProps={{ margin: "79px 0 235px" }} />
      </div>
      {!smallScreen && (
        <div className={styles.container + " imageBg1"}>
          <h2 className={styles.otherServicesTitle + " pageTitle"}>
            Другие услуги
          </h2>
          <Carousel
            className={styles.carousel}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                color: "white",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "white",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "rgba(255,255,255,0.5)",
              },
            }}
          >
            {defaultServiceBanners.map((banner, id) => (
              <div
                key={id}
                className={styles.serviceBanner}
                style={{ background: banner.bgColor }}
              >
                <img
                  src={banner.icon}
                  alt={banner.title}
                  width={473}
                  height={346}
                />
                <div className={styles.bannerInfo}>
                  <h3 className={styles.bannerTitle}>{banner.title}</h3>
                  <hr />
                  <p className={styles.bannerDescription}>
                    {banner.description}
                  </p>
                  <div
                    className={styles.buttonsContainer}
                    style={{
                      width: banner.containerWidth
                        ? banner.containerWidth
                        : "444px",
                    }}
                  >
                    {banner.serviceButtons.map((button, id) => (
                      <button
                        key={id}
                        style={{
                          width: button.width,
                          height: button.height ? button.height : "34px",
                          color: banner.bgColor.startsWith("#")
                            ? banner.bgColor
                            : banner?.btnColor,
                        }}
                        onClick={button?.onClick}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                  <p className={styles.remark}>{banner?.remark}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ServicesPage;

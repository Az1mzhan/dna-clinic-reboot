import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { defaultServiceBanners } from "../../types/ServiceBanner";
import styles from "./servicesPage.module.css";
import { MenuSection } from "../../components/menu-section/MenuSection";
import { defaultMenus } from "../../types/Menu";

const ServicesPage: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.containerTitle}>Наши услуги</h1>
        <h2 className={styles.containerSubtitle}>
          Медицинские услуги на любой случай.
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
                <p className={styles.bannerDescription}>{banner.description}</p>
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
        <MenuSection menu={defaultMenus[0]} />
      </div>
    </>
  );
};

export default ServicesPage;

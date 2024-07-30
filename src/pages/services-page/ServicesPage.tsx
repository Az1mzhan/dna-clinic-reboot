import { FC } from "react";
import { defaultServiceBanners } from "../../types/ServiceBanner";
import { Box } from "@mui/material";
import styles from "./servicesPage.module.css";

const ServicesPage: FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <p className={styles.containerTitle}>Наши услуги</p>
        <p className={styles.containerSubtitle}>
          Медицинские услуги на любой случай.
        </p>
        <Box className={styles.bannersContainer}>
          {defaultServiceBanners.map((banner, id) => (
            <Box
              key={id}
              className={styles.serviceBanner}
              sx={{ background: banner.bgColor }}
            >
              <img src={banner.icon} alt={banner.title} width={473} />
              <Box>
                <p className={styles.bannerTitle}>{banner.title}</p>
                <p className={styles.bannerDescription}>{banner.description}</p>
                <Box sx={{ width: banner?.containerWidth }}>
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
                </Box>
                <p>{banner?.remark}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ServicesPage;

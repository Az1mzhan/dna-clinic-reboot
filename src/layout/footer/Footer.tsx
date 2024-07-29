import { FC } from "react";
import { Box, Link } from "@mui/material";
import logo_white from "../../assets/logo_white.svg";
import phone from "../../assets/phone.svg";
import instagram from "../../assets/instagram.svg";
import mail from "../../assets/mail.svg";
import styles from "./footer.module.css";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { title: "Услуги", url: "services" },
    { title: "Врачи", url: "medics" },
    { title: "Отзывы", url: "reviews" },
    { title: "О нас", url: "about-us" },
  ];

  return (
    <footer className={styles.footer}>
      <Box className={styles.footerLeft}>
        <Box>
          <img src={logo_white} alt="logo_white" />
          <p className={styles.tagline}>Быстро. Надежно. Качественно.</p>
        </Box>
        <p className={styles.copyright}>Все права защищены, {currentYear}.</p>
      </Box>
      <Box className={styles.navLinks}>
        {navLinks.map((link, id) => (
          <Link key={id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </Box>
      <Box className={styles.footerRight}>
        <Box className={styles.link}>
          <img src={phone} alt="phone" />
          <p>+7 702 301 2796</p>
        </Box>
        <Box className={styles.link}>
          <img src={instagram} alt="instagram" />
          <p>@dnkclinic_kz</p>
        </Box>
        <Box className={styles.link}>
          <img src={mail} alt="email" />
          <p>support@dnkclinic.kz</p>
        </Box>
      </Box>
    </footer>
  );
};

import { FC } from "react";
import { Box, Link } from "@mui/material";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import styles from "./navbar.module.css";

export const Navbar: FC = () => {
  const navLinks = [
    { title: "Главная", url: "/" },
    { title: "Услуги", url: "services" },
    { title: "Врачи", url: "medics" },
    { title: "Цены", url: "pricing" },
    { title: "О нас", url: "about-us" },
    { title: "Отзывы", url: "reviews" },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <Box className={styles.contentContainer}>
          <img src={logo} alt="logo" width={117} height={59} />
          <Box className={styles.navLinks}>
            {navLinks.map((link, id) => (
              <Link key={id} href={link.url}>
                {link.title}
              </Link>
            ))}
          </Box>
          <Box className={styles.phoneSection}>
            <img src={phone} alt="phone" width={19.89} height={19.93} />
            <p>+7 702 301 2796</p>
          </Box>
        </Box>
      </nav>
    </>
  );
};

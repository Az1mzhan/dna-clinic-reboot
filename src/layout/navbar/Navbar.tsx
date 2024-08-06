import { FC, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";
import menu from "../../assets/menu.svg";
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
  const smallScreen = useMediaQuery("(max-width: 1024px)");
  const [opened, setOpened] = useState(false);

  const handleMenu = () => {
    if (opened) {
      setOpened(false);
      document.body.style.overflow = "auto";
    } else {
      setOpened(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <nav className={styles.navbar}>
      <div
        onClick={handleMenu}
        className={!opened ? styles.navbarDim : styles.navbarDimOpened}
      />
      <div className={styles.contentContainer}>
        <img src={logo} alt="logo" width={117} height={59} />
        {!smallScreen && (
          <div className={styles.navLinks}>
            {navLinks.map((link, id) => (
              <a key={id} href={link.url}>
                {link.title}
              </a>
            ))}
          </div>
        )}
        {!smallScreen && (
          <div className={styles.phoneSection}>
            <img src={phone} alt="phone" width={19.89} height={19.93} />
            <p>+7 702 301 2796</p>
          </div>
        )}
        {smallScreen && (
          <button onClick={handleMenu} className={styles.openMenu}>
            <img src={menu} alt="" />
          </button>
        )}
      </div>
      {smallScreen && (
        <div className={!opened ? styles.mobMenu : styles.mobMenuOpened}>
          {navLinks.map((link, id) => (
            <a key={id} href={link.url}>
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

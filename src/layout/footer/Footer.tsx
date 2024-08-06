import { FC } from "react";
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
      <div className={styles.footerLeft}>
        <div>
          <img src={logo_white} alt="logo_white" />
          <h5 className={styles.tagline}>Быстро. Надежно. Качественно.</h5>
        </div>
        <p className={styles.copyright}>Все права защищены, {currentYear}.</p>
      </div>
      <div className={styles.navLinks}>
        {navLinks.map((link, id) => (
          <a key={id} href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
      <div className={styles.footerRight}>
        <div className={styles.link}>
          <img src={phone} alt="phone" />
          <a className="link" href="tel:+77023012796">
            +7 702 301 2796
          </a>
        </div>
        <div className={styles.link}>
          <img src={instagram} alt="instagram" />
          <a className="link" href="https://www.instagram.com/dnkclinic_kz/">
            @dnkclinic_kz
          </a>
        </div>
        <div className={styles.link}>
          <img src={mail} alt="email" />
          <a className="link" href="mailto:support@dnkclinic.kz">
            support@dnkclinic.kz
          </a>
        </div>
      </div>
    </footer>
  );
};

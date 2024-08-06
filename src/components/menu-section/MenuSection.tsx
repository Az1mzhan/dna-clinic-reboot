import { FC } from "react";
import { Menu } from "../../types/Menu";
import styles from "./menuSection.module.css";

interface Props {
  menu: Menu;
}

export const MenuSection: FC<Props> = ({ menu }: Props) => {
  const alphabet = [..."абвгдеёжзийклмнопрстуфхцчшщъыьэюя"];

  return (
    <div className={styles.menuSection}>
      {alphabet
        .filter((letter) =>
          menu.list
            .sort()
            .some((item) => item.label.toLowerCase().startsWith(letter))
        )
        .map((letter, id) => (
          <div key={id} className={styles.letterSection}>
            <h3 className={styles.letterTitle}>{letter.toUpperCase()}</h3>
            <div className={styles.letterList}>
              {menu.list
                .filter((item) => item.label.toLowerCase().startsWith(letter))
                .map((item, id) => (
                  <a key={id} className="link" href={item.link}>
                    {item.label}
                  </a>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

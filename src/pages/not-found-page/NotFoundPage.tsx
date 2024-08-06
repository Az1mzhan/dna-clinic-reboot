import { FC } from "react";
import styles from "./notFoundPage.module.css";

const NotFoundPage: FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundContentContainer}>
        <h1 className={styles.notFoundPageTitle}>404</h1>
        <h2 className={styles.notFoundPageDescription}>
          Страница, которую вы запрашиваете, не существует. Возможно, она
          устарела, была удалена, или был введен неверный адрес в адресной
          строке
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPage;

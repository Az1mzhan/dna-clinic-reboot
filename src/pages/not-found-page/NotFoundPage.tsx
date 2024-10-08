import { FC } from "react";
import styles from "./notFoundPage.module.css";

const NotFoundPage: FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundContentContainer}>
        <h1 className="pageTitle">404</h1>
        <h2 className="pageDescription">
          Страница, которую вы запрашиваете, не существует. Возможно, она
          устарела, была удалена или перенесена.
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPage;

import { FC } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./pageLoader.module.css";

export const PageLoader: FC = () => {
  return (
    <div className={styles.pageLoader}>
      <CircularProgress sx={{ color: "white", fontSize: "100px" }} />
    </div>
  );
};

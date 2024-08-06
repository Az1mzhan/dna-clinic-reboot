import { FC } from "react";
import { Avatar, Rating } from "@mui/material";
import { defaultReviews } from "../../types/Review";
import styles from "./reviewsPage.module.css";

const ReviewsPage: FC = () => {
  return (
    <>
      <div className={styles.reviewsPage}>
        <div className={styles.reviewsPageContentContainer}>
          <h1 className="pageTitle">Отзывы</h1>
          <h2 className="pageDescription">
            Здесь вы можете прочесть отзывы о нашей клинике.
          </h2>
          <div className={styles.reviewsContainer}>
            {defaultReviews.map((review, id) => (
              <div className={styles.review} key={id}>
                <div className={styles.reviewFirstLine}>
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <div>
                    <p
                      className={styles.reviewerName}
                    >{`${review.name} ${review.surname}`}</p>
                    <Rating
                      readOnly
                      defaultValue={review.rating}
                      sx={{ marginTop: "5px" }}
                    />
                  </div>
                </div>
                <p className={styles.reviewText}>{`“${review.text}”`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;

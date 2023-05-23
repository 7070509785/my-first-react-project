import styles from "./review-message.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
function ReviewMessage({ review }) {
  console.log(review);
  return (
    <div className={styles.nutan2}>
      <div className={styles.nutan3}>
        <p>{review.stars}&nbsp;</p>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={styles.nutan4}>
        <div className={styles.nutat5}>
          <p>{review.message}</p>
          <div className={styles.timtim2}>
            <div className={styles.tim3}>
              <h5>
                {review.userName} | {review.date.format("Do MMM YYYY")}
              </h5>
            </div>
            <div className={styles.tim4}>
              <div className={styles.apple}>
                <FontAwesomeIcon className={styles.app} icon={faThumbsUp} />
                <p>{review.like}</p>
                <div className={styles.apple1}>
                  <FontAwesomeIcon className={styles.aoo} icon={faThumbsDown} />
                  <p>{review.dislike}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewMessage;

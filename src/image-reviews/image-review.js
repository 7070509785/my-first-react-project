import styles from "./image-review.module.css";

import { useEffect, useState } from "react";
import ReviewMessage from "./review-message";
function ImageReview({ review, back, next }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [review]);

  const goBack = () => {
    if (activeImage === 0) {
      back();
    } else {
      setActiveImage((i) => i - 1);
    }
  };

  const goNext = () => {
    if (activeImage === review.images.length - 1) {
      next();
    } else {
      setActiveImage((i) => i + 1);
    }
  };

  return (
    <div className={styles.nutan}>
      <div className={styles.timtim}>
        <div className={styles.ayush1}>
          <span>X</span>
          <h2 onClick={goBack}>&lt;</h2>
        </div>
        <div className={styles.ayush2}>
          <div className={styles.top}>
            <img
              className={styles.main_img}
              src={review.images[activeImage]}
            ></img>
            <div className={styles.sop}>
              {review.images.map((i, index) => (
                <img
                  src={i}
                  onClick={() => setActiveImage(index)}
                  className={activeImage === index ? styles.active : ""}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.ayush3}>
          <h2 onClick={goNext}>&gt;</h2>
        </div>
      </div>
      <div className={styles.nutan1}>
        <ReviewMessage review={review}></ReviewMessage>
      </div>
    </div>
  );
}

export default ImageReview;

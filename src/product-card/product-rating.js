import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./product-rating.module.css";
function ProductRating() {
  return (
    <div className={styles.nutan}>
      <span>4.2</span>
      <FontAwesomeIcon className={styles["star-icon"]} icon={faStar} />
      <div className={styles.happy}>|</div>
      <span>25.7k</span>
    </div>
  );
}

export default ProductRating;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./product-top-sort.module.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function ProductTopSort() {
  return (
    <div className={styles.village}>
      <div className={styles.mood}>
        <h5>Sort by : </h5>
        <span>Recommended</span>
        <FontAwesomeIcon icon={faChevronDown} className={styles.not} />
      </div>
      <div className={styles.apple4}>
        <h5>Recommended</h5>
      </div>
      <div className={styles.mat}>
        <h5>What's New</h5>
      </div>
      <div className={styles.cat}>
        <h5>Popularity</h5>
      </div>
      <div className={styles.apple}>
        <h5>Better Discount</h5>
      </div>
      <div className={styles.apple1}>
        <h5>Price: High to Low</h5>
      </div>
      <div className={styles.apple2}>
        <h5>Price: Low to High</h5>
      </div>
      <div className={styles.apple3}>
        <h5>Customer Rating</h5>
      </div>
    </div>
  );
}

export default ProductTopSort;

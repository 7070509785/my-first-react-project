import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './product-top-sort.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function ProductTopSort() {
  return (
    <div className={styles.mood}>
      <h5>Sort by : </h5>
      <span>Recommended</span>
      <FontAwesomeIcon icon={faChevronDown} className={styles.not} />
      <div className={styles.kajal}>
        <div className={styles.apple}>
          <h5>Recommended</h5>
        </div>
        <div className={styles.apple}>
          <h5>What's New</h5>
        </div>
        <div className={styles.apple}>
          <h5>Popularity</h5>
        </div>
        <div className={styles.apple}>
          <h5>Better Discount</h5>
        </div>
        <div className={styles.apple}>
          <h5>Price: High to Low</h5>
        </div>
        <div className={styles.apple}>
          <h5>Price: Low to High</h5>
        </div>
        <div className={styles.apple}>
          <h5>Customer Rating</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductTopSort;

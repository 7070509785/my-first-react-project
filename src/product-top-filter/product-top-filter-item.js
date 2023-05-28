import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./product-top-filter-item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductTopFillerItem({ title }) {
  return (
    <div className={styles.not}>
      <div className={styles.nutan1}>
        <h5>{title}</h5>
        <FontAwesomeIcon icon={faChevronDown} className={styles.bol} />
      </div>
    </div>
  );
}

export default ProductTopFillerItem;

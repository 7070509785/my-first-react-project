import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./product-top-filter-item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductTopFillerItem({ title, selected }) {
  return (
    <div className={styles.not + ` ${selected ? styles.selected : ""}`}>
      <div className={styles.nutan1}>
        <h5>{title}</h5>
        {selected ? (
          <FontAwesomeIcon icon={faChevronUp} className={styles.bol} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className={styles.bol} />
        )}
      </div>
    </div>
  );
}

export default ProductTopFillerItem;

import {
  faArrowAltCircleDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ProductTopFillerItem from "./product-top-filter-item";
import styles from "./product-top-filters.module.css";
import ProductTopSort from "./product-top-sort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function ProductTopFilters() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  let filters = [
    {
      title: "Bundles",
      items: [
        {
          key: "Bundles",
        },
        {
          key: "Single Styles",
        },
      ],
    },
    {
      title: "Country of Origin",
      items: [
        {
          key: "All Countries",
        },
        {
          key: "India",
        },
      ],
    },
    {
      title: "Size",
      items: [
        {
          key: "3XS",
        },
        {
          key: "XXS",
        },
        {
          key: "XS/S",
        },
        {
          key: "S",
        },
        {
          key: "S/M",
        },
        {
          key: "M",
        },
        {
          key: "M/L",
        },
        {
          key: "L",
        },
        {
          key: "X/L",
        },
        {
          key: "XL/XXL",
        },
        {
          key: "XX/L",
        },
        {
          key: "3XL",
        },
        {
          key: "4XL",
        },
        {
          key: "5XL",
        },
        {
          key: "6XL",
        },
        {
          key: "7XL",
        },
        {
          key: "8XL",
        },
        {
          key: "9XL",
        },
        {
          key: "10XL",
        },
      ],
    },
  ];
  const onClick = (f) => {
    if (selectedFilter?.title === f.title) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(f);
    }
  };
  const selectItem = () => {};
  const removeItem = () => {};
  return (
    <div>
      <div className={styles.ayush}>
        <div className={styles.nutan}>
          {filters.map((f) => (
            <div onClick={() => onClick(f)}>
              <ProductTopFillerItem
                selected={selectedFilter?.title === f.title}
                title={f.title}
              />
            </div>
          ))}
        </div>
        <div>
          <ProductTopSort />
        </div>
      </div>
      {selectedFilter != null && (
        <div className={styles.kajal5}>
          {selectedFilter.items.map((i) => (
            <div className={styles.ayush1}>
              <input type="checkbox"></input>
              <label>{i.key}</label>
            </div>
          ))}
        </div>
      )}
      <div className={styles.kajal7}>
        <div className={styles.kajal4}>
          <p>Onesize</p>
          <FontAwesomeIcon icon={faXmark} className={styles.kajal8} />
        </div>
        <div className={styles.kajal4}>
          <p>35</p>
          <FontAwesomeIcon icon={faXmark} className={styles.kajal9} />
        </div>
      </div>
    </div>
  );
}

export default ProductTopFilters;

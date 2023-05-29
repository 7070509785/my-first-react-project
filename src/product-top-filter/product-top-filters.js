import ProductTopFillerItem from "./product-top-filter-item";
import styles from "./product-top-filters.module.css";
import ProductTopSort from "./product-top-sort";
function ProductTopFilters() {
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
  return (
    <div>
      <div className={styles.ayush}>
        <div className={styles.nutan}>
          <ProductTopFillerItem title={"Add-Ons"} />
          <ProductTopFillerItem title={"Assembly"} />
          <ProductTopFillerItem title={"Bundles"} />
          <ProductTopFillerItem title={"Country of Origin"} />
          <ProductTopFillerItem title={"Material"} />
          <ProductTopFillerItem title={"Pattern"} />
          <ProductTopFillerItem title={"Rating"} />
          <ProductTopFillerItem title={"Shape"} />
          <ProductTopFillerItem title={"Size"} />
          <ProductTopFillerItem title={"Trends"} />
          <ProductTopFillerItem title={"Warranty"} />
        </div>
        <div>
          <ProductTopSort />
        </div>
      </div>
      <div className={styles.kajal5}>
        <div className={styles.ayush1}>
          <input type="checkbox"></input>
          <label>3XS</label>
        </div>
        <div className={styles.ayush1}>
          <input type="checkbox"></input>
          <label>XXS</label>
        </div>
        <div className={styles.ayush1}>
          <input type="checkbox"></input>
          <label>XS/S</label>
        </div>
        <div className={styles.ayush1}>
          <input type="checkbox"></input>
          <label>S</label>
        </div>
      </div>
    </div>
  );
}

export default ProductTopFilters;

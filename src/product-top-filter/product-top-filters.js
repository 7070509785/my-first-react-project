import ProductTopFillerItem from "./product-top-filter-item";
import styles from "./product-top-filters.module.css";
import ProductTopSort from "./product-top-sort";
function ProductTopFilters() {
  return (
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
  );
}

export default ProductTopFilters;

import styles from "./iconContainer.module.css";
function IconContainer() {
  return (
    <div className={styles.himanshu}>
      <div className={styles.nutan}>
        <h2>What customers say about this product</h2>
        <span>X</span>
      </div>
      <div className={styles["nutan-mandal"]}>
        <div className={styles.kajal}>
          <p>Fit</p>
          <div className={styles.bittu1}>
            <progress value="4" max="100"></progress>
            <p>Tight(4%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="4" max="100"></progress>
            <p>ALittle Tight(4%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="70" max="100"></progress>
            <p>Just Right(73%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="12" max="100"></progress>
            <p>ALittle Loose(12%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="7" max="100"></progress>
            <p>Loose(7%)</p>
          </div>
        </div>
        <div className={styles["timtim-mandal"]}>
          <p>Lenght</p>
          <div className={styles.bittu1}>
            <progress value="5" max="100"></progress>
            <p>Short(5%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="4" max="100"></progress>
            <p>ALittle Short(4%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="82" max="100"></progress>
            <p>just Right(82%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="6" max="100"></progress>
            <p>ALittle Loose(6%)</p>
          </div>
          <div className={styles.bittu1}>
            <progress value="3" max="100"></progress>
            <p>Loose(3%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconContainer;

import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.timtim}>
      <div className={styles.nutan}>
        <div className={styles.nutan1}>
          <h5>ONLINE SHOPPING</h5>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home&Living</li>
            <li>Beauty</li>
            <li>GiftCards</li>
            <li>MyntraInsider</li>
          </ul>
        </div>
        <div className={styles.nutan2}>
          <h5>USEFUL LINKS</h5>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporare Information</li>
            <li>Whitehat</li>
          </ul>
        </div>
      </div>
      <div className={styles.kajal}>
        <h5>CUSTOMER POLICIES</h5>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Termj ofUse</li>
          <li>teack Orders</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>Returns</li>
          <li>Privacy Policy</li>
          <li>Gricvance officer</li>
        </ul>
      </div>
      <div className={styles.kajal1}>
        <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;

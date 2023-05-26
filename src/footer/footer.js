import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-regular-svg-icons";

import styles from "./footer.module.css";
function Footer() {
  const popularLinks = [
    { name: "SherwaniTrack", url: "/SherwaniTrack" },
    { name: "PantsBlazers", url: "/PantsBlazers" },
    { name: "Sweaters", url: "/Sweaters" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Kurta Pajama", url: "/Kurta Pajama" },
    { name: "Raincoats", url: "/Raincoats" },
    { name: "Shorts", url: "/Shorts" },
    { name: "Waistcoat", url: "/Waistcoat" },
    { name: "Inner Wear", url: "/Inner Wear" },
    { name: "Nightwear", url: "/Nightwear" },
    { name: "Jeans", url: "/Jeans" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Track Pants", url: "/Track Pants" },
    { name: "Nightwear", url: "/Nightwear" },
    { name: "SherwaniTrack", url: "/SherwaniTrack" },
    { name: "PantsBlazers", url: "/PantsBlazers" },
    { name: "Sweaters", url: "/Sweaters" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Kurta Pajama", url: "/Kurta Pajama" },
    { name: "Raincoats", url: "/Raincoats" },
    { name: "Shorts", url: "/Shorts" },
    { name: "Waistcoat", url: "/Waistcoat" },
    { name: "Inner Wear", url: "/Inner Wear" },
    { name: "Nightwear", url: "/Nightwear" },
    { name: "Jeans", url: "/Jeans" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Track Pants", url: "/Track Pants" },
    { name: "SherwaniTrack", url: "/SherwaniTrack" },
    { name: "PantsBlazers", url: "/PantsBlazers" },
    { name: "Sweaters", url: "/Sweaters" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Kurta Pajama", url: "/Kurta Pajama" },
    { name: "Raincoats", url: "/Raincoats" },
    { name: "Shorts", url: "/Shorts" },
    { name: "Waistcoat", url: "/Waistcoat" },
    { name: "Inner Wear", url: "/Inner Wear" },
    { name: "Nightwear", url: "/Nightwear" },
    { name: "Jeans", url: "/Jeans" },
    { name: "MenMen", url: "/MenMen" },
    { name: "Track Pants", url: "/Track Pants" },
  ];

  return (
    <div className={styles.book}>
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
          <div className={styles.kajal2}>
            <img
              className={styles.sop}
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            ></img>
          </div>
          <div className={styles.sop1}>
            <img
              className={styles.sop2}
              src="https://www.enpf.kz/upload/medialibrary/ac9/ac90c2d3297282225ff122dc0978ecdb.png"
            ></img>
          </div>
        </div>
        <div className={styles.kajal3}>
          <h5>KEEP IN TOUCH</h5>
          <img src="data:image/png;base64,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"></img>
        </div>
        <div className={styles.kajal4}>
          <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"></img>
        </div>
        <div className={styles.kajal5}>
          <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"></img>
        </div>
        <div className={styles.kajal6}>
          <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"></img>
        </div>
        <div className={styles.apple1}>
          <div className={styles.apple}>
            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"></img>
            <div className={styles.app}>
              <p>
                <b>100% ORIGINAL</b>guarantee for all products at myntra.com
              </p>
            </div>
          </div>
          <div className={styles.not}>
            <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"></img>
            <div className={styles.mood}>
              <p>
                <b>Return within 14days</b>of receiving your order
              </p>
            </div>
          </div>
        </div>
      </div>
      <div classNlame={styles.null}>
        <div className={styles.bool}>
          <hr className={styles.top} />
          <div className={styles.rat}>POPULAR SEARCHES</div>
          <div className={styles.live}>
            {popularLinks.map((i) => (
              <a href={i.url}>{i.name}</a>
            ))}
          </div>
        </div>

        <div className={styles.tiktik}>
          <div className={styles.toktok}>
            In case of any concern,
            <a href="/contactus" data-reactid="334">
              Contact Us
            </a>
          </div>
          <div className={styles.fother}>
            © 2023 www.myntra.com. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

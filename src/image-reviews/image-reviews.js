import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./image-reviews.module.css";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
function Imagereviews() {
  return (
    <div className={styles.nutan}>
      <div className={styles.timtim}>
        <div className={styles.ayush1}>
          <span>X</span>
          <h2>&lt;</h2>
        </div>
        <div className={styles.ayush2}>
          <div className={styles.top}>
            <img src="https://img0.junaroad.com/uiproducts/17778960/zoom_0-1623068152.jpg"></img>
            <div className={styles.sop}>
              <img src="https://rukminim1.flixcart.com/image/832/832/k4hcjgw0pkrrdj/shoe/p/d/s/6-orifwsh-3068-swiggy-orifwsh-3068-original-imafkfdgtgr6xpzq.jpeg?q=70"></img>
            </div>
          </div>
        </div>
        <div className={styles.ayush3}>
          <h2>&gt;</h2>
        </div>
      </div>
      <div className={styles.nutan1}>
        <div className={styles.nutan2}>
          <div className={styles.nutan3}>
            <p>5</p>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.nutan4}>
            <div className={styles.nutat5}>
              <p>
                The Revolutionary movement for Indian Independence was part of
                the Indian
              </p>
              <div className={styles.timtim2}>
                <div className={styles.tim3}>
                  <h5>Mayank Raikwer | 17 may 2023</h5>
                </div>
                <div className={styles.tim4}>
                  <div className={styles.apple}>
                    <FontAwesomeIcon className={styles.app} icon={faThumbsUp} />
                    <p>750</p>
                    <div className={styles.apple1}>
                      <FontAwesomeIcon
                        className={styles.aoo}
                        icon={faThumbsDown}
                      />
                      <p>350</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagereviews;

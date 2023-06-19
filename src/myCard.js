import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './myCard.module.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMobile, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductRating from './product-card/product-rating';
import { icon } from '@fortawesome/fontawesome-svg-core';
function MyCard() {
  return (
    <div className={styles.sop}>
      <div className={styles.ayshu}>
        <img src='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg'></img>
        <h3>U.S.polo Assn.</h3>
        <p>Men Regular Shorts</p>
        <span className={styles.car}>Rs. 1039</span>
        <span className={styles.top}>Rs.899</span>
        <span className={styles.title}>(70% oFF)</span>
      </div>
      <div className={styles.timtim}>
        <button className={styles.bat}>
          <FontAwesomeIcon icon={faHeart} />
          <p>WISHLIST</p>
        </button>
        <div className={styles.nutan2}>
          <p>sizes:S</p>
        </div>
      </div>
      <div className={styles.name}>
        <ProductRating></ProductRating>
      </div>
      <div className={styles.frist}>
        <div className={styles.ball}>
          <FontAwesomeIcon className={styles['mobile-icon']} icon={faMobile} />
          <h5>VIEW SIMILAR</h5>
        </div>
      </div>
    </div>
  );
}

export default MyCard;

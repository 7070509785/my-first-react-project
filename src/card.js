import styles from './card.module.css';
function Card({ imageSrc, image1Src, thela, title, price }) {
  return (
    <div>
      <div className={styles.timtim}>
        <div className={styles.ayush}>
          <img src={imageSrc}></img>
        </div>
        <div className={styles.bittu}>
          <img src={image1Src}></img>
        </div>
        <div className={styles.himanshu1}>
          <img src={thela}></img>
        </div>
        <div className={styles.hello}>
          <p>{title}</p>
        </div>
        <div className={styles.hii}>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;

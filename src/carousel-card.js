import styles from './carousel-card.module.css';
function CarouselCard({ number, imageSrc, title }) {
  return (
    <div className={styles.apply1}>
      <div className={styles.apply}>
        <p>{number}</p>
        <img src={imageSrc}></img>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CarouselCard;

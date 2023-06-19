import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ayush.module.css';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import CarouselCard from './carousel-card';

function Ayush() {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.kumari}>
          <CarouselCard
            number='1/3'
            imageSrc='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='nutan mandal'
          />
          <CarouselCard
            number='2/3'
            imageSrc='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='nutan mandal'
          />
          <CarouselCard
            number='3/3'
            imageSrc='https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='nutan mandal'
          />
        </div>
        <div className={styles.scrollbutton}>
          <div className={styles.top}>
            <FontAwesomeIcon icon={faLessThan} />
          </div>
          <div className={styles.black}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
}
export default Ayush;

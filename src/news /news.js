import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './news.module.css';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
function News() {
  return (
    <div className={styles.nutan}>
      <div className={styles.nutan1}>
        <img src='https://assets.myntassets.com/assets/images/2023/6/12/7ca6e511-cd59-4316-b355-601a29a298441686550090930-Stripes.png' />
      </div>
      <div className={styles.nutan2}>
        <span>Own your stripes & bleed BLUE!</span>
        <div className={styles.nutan3}>
          <p>43 mins ago</p>
          <div className={styles.nutan4}>
            <FontAwesomeIcon icon={faShareNodes} className={styles.nutan5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

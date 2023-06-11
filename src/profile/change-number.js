import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';
import styles from './change-number.module.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function ChangeNumber() {
  return (
    <div className={styles.timtim}>
      <div className={styles.nutan}>
        <div className={styles.nutan1}>2-Step Verification Required</div>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.nutan2}>
        For better security, OTP is sent to a previously used number on your
        account.
      </div>
      <div className={styles.nutan3}>
        <div className={styles.nutan4}>
          <span>Select a mobile number</span>
        </div>
      </div>
      <div className={styles.nutan5}>
        <label className={styles.nutan6}>
          <input type='radio' />
          <div className={styles.nutan7}>8271691681</div>
        </label>
      </div>
      <div className={styles.nutan8}>
        <Button className={styles['bittu3']} type={'secondary'}>
          <p>REQUEST PTP</p>
        </Button>
      </div>
    </div>
  );
}

export default ChangeNumber;

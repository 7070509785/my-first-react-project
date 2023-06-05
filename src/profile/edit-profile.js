import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './edit-profile.module.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function EditProfile() {
  return (
    <div className={styles.nutan}>
      <div className={styles.nutan1}>
        <h2>Edit Details</h2>
        <hr className={styles.mood}></hr>
      </div>
      <div className={styles.mood1}>
        <div className={styles.mood2}>
          <div className={styles.mood3}>
            <p>Mobile Number*</p>
            <div className={styles.mood5}>
              <span>8271691681</span>
              <div className={styles.mark}>
                <FontAwesomeIcon icon={faCheck} className={styles.check} />
              </div>
            </div>
          </div>
          <buttan className={styles.mark1}>
            <p>CHANGE</p>
          </buttan>
        </div>
      </div>
      <div className={styles.good1}>
        <input className={styles.good} />
        <span>Full Name</span>
      </div>
    </div>
  );
}
export default EditProfile;

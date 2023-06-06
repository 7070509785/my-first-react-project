import style from './button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './edit-profile.module.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Input from './input';
import Button from './button';
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
          <Button className={styles['wishlist-btn']} type={'secondary'}>
            <p className={styles.mark1}>change</p>
          </Button>
        </div>
      </div>
      <div className={styles.good}>
        <Input placeholder={'Name*'}></Input>
        <Input placeholder={'Email*'}></Input>

        <div className={styles.loog}>
          <Button className={styles['wishlist-btn']} type={'secondary'}>
            <FontAwesomeIcon icon={faCheck} className={styles.mandal} />
            <p className={styles.word}>Male</p>
          </Button>
          <Button className={style['wishlist-btn']} type={'secondary'}>
            <FontAwesomeIcon icon={faCheck} />
            <p className={styles.word}>Female</p>
          </Button>
        </div>
        <Input placeholder={'Birthday (dd/mm/yyyy)*'}></Input>
        <Input placeholder={'Location*'}></Input>
        <div className={styles.loog1}>
          <p>Alternate mobile details</p>
        </div>
        <div className={styles.mandla6}>
          <Input placeholder={'+91 | Mobile Number*'}></Input>
          <Input placeholder={'Hint name*'}></Input>
          <Input placeholder={'Save Details*'}></Input>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;

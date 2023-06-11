import Button from './button';
import styles from './change-passwoped.module.css';
import Input from './input';
function ChangePasswopde() {
  return (
    <div className={styles.toog}>
      <div className={styles.toog1}>
        <h3>Change Password</h3>
      </div>
      <div className={styles.toog2}>
        <Input className={styles.toog3} placeholder={'old passwoped*'}></Input>
        <Input placeholder={'New Password*'}></Input>
      </div>
      <div className={styles.toog4}>
        <div className={styles.toog5}>
          <span> 8 Characters</span>
        </div>
        <div className={styles.toog6}>
          <span>1 Special</span>
        </div>
        <div className={styles.toog7}>
          <span>1 Uppercase</span>
        </div>
        <div className={styles.toog8}>
          <span>1 Numeric</span>
        </div>
      </div>
      <div className={styles.toog9}>
        <Input placeholder={'Confirm New Password*'}></Input>
      </div>
      <div className={styles.toog10}>
        <Button className={styles['toog11']} type={'secondary'}>
          <p>CHANGE</p>
        </Button>
      </div>
      <div className={styles.toog12}>
        <Button className={styles['toog13']} type={'secondary'}>
          <p>CANCEL</p>
        </Button>
      </div>
    </div>
  );
}
export default ChangePasswopde;

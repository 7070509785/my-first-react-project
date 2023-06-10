import Button from './button';
import styles from './change-passwoped.module.css';
import Input from './input';
function ChangePasswopde() {
  return (
    <div className={styles.toog}>
      <div className={styles.toog1}>
        <h3>Change Passwpde</h3>
      </div>
      <div className={styles.toog2}>
        <Input placeholder={'old passwoped*'}></Input>
        <Input placeholder={'New Password*'}></Input>
      </div>
    </div>
  );
}
export default ChangePasswopde;

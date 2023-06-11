import styles from './Profile-Details.module.css';
import Button from './button';
function ProfileDetails() {
  return (
    <div className={styles.timtim}>
      <div className={styles.timtim1}>
        <div className={styles.timtim2}>Profile Details</div>
      </div>
      <table className={styles.timtim3}>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>nutan kumari</td>
          </tr>
          <tr>
            <td>Mobile Number</td>
            <td>8271691681</td>
          </tr>
          <tr>
            <td>Email ID</td>
            <td>- not added -</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>FEMALE</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td>- not added -</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>- not added -</td>
          </tr>
          <tr>
            <td>Alternate Mobile</td>
            <td>- not added -</td>
          </tr>
          <tr>
            <td>Hint Name</td>
            <td>- not added -</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.toog12}>
        <Button className={styles['toog13']} type={'secondary'}>
          <p> EDIT </p>
        </Button>
      </div>
    </div>
  );
}

export default ProfileDetails;

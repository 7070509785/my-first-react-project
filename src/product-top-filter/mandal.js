import styles from "./mandal.css";
import { useState } from "react";
function Mandal() {
  const [name, satName] = useState("");
  consr[(tnc, satTnc)] = useState(false);
  const [interest, satInterest] = useState("");
  function getFormData(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.app}>
      <h1>Handle From in Recat</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          Placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <select>
          <option>nutan kumari</option>
          <option>timtim</option>
          <option>ayush</option>
        </select>
        <br /> <br />
        <input type="checkbox" />
        <span>nutan kmari timtim kumari</span>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Mandal;

import styles from './mandal.module.css';
import { useState } from 'react';
function Mandal() {
  const [name, setName] = useState('');
  const Mandal = ['nutan', 'timtim', 'ayush', 'timtim', 'ayush'];
  const [tnc, setTnc] = useState([]);
  const [interest, setInterest] = useState('');
  function getFormData(e) {
    console.warn(name, tnc, interest);
    e.preventDefault();
  }
  console.log(tnc);
  return (
    <div className={styles.pp}>
      <h1>Handle From in Recat</h1>
      <form onSubmit={getFormData}>
        <input
          type='text'
          Placeholder='enter name'
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>nutan kumari</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br /> <br />
        {Mandal.map((s, i) => (
          <>
            <input
              type='checkbox'
              value={tnc[i]}
              onChange={(e) =>
                setTnc((t) => {
                  t[i] = e.target.checked;
                  return [...t];
                })
              }
            />
            <span>{s}</span>
            <br />
            <br />
          </>
        ))}
        <button type='submit'>submit</button>
        <button>Clear</button>
        <br />
        <br />
        <br />
        <div>
          <ul>
            {Mandal.map((s, i) => {
              if (tnc[i]) {
                return <li>{s}</li>;
              }
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Mandal;

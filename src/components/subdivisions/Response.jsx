import React from 'react';
import styles from '../app/App.css';

export default function Response(props) {
  const displayRes = JSON.stringify(props.res);
  return (
    <nav className={styles.resArea}>
      <p>API Response:</p>
      <textarea
        className={styles.displayJSON}
        aria-label="Res Display"
        id="resBox"
        name="resDisplay"
        rows="20"
        cols="50"
        placeholder="JSON Res Here"
        defaultValue={displayRes}
      ></textarea>
    </nav>
  );
}

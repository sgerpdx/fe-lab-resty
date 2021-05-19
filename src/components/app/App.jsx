import React from 'react';
import OtterRestContainer from '../../containers/OtterRestContainer';
import styles from './App.css';
//import 'font-awesome/css/font-awesome.css';

export default function App() {
  return (
    <div className={styles.mainArea}>
      <h2 className={styles.titleBar}>Innput at Otter Rest</h2>
      <OtterRestContainer />
    </div>
  );
}

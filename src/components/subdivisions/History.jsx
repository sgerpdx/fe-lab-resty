import React from 'react';
//import { styles } from './History.css';

export default function History(props) {
  return (
    <nav className="historyArea">
      <textarea
        className="displayHistory"
        id="historyBox"
        name="historyDisplay"
        cols="50"
        defaultValue="History"
      ></textarea>
    </nav>
  );
}

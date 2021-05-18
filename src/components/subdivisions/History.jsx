import React from 'react';
//import { styles } from './History.css';

export default function History(props) {
  //let reqHistory = [];
  const reqItem = `${props.method} from ${props.url}`;
  //eqHistory.push(reqItem);
  return (
    <nav className="historyArea">
      <textarea
        className="displayHistory"
        id="historyBox"
        name="historyDisplay"
        cols="50"
        rows="4"
        placeholder="History"
        value={reqItem}
      ></textarea>
    </nav>
  );
}

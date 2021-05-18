import React from 'react';
//import { styles } from './History.css';

export default function History(props) {
  //let reqHistory = [];
  //const reqItem = `${props.method} from ${props.url}`;
  //eqHistory.push(reqItem);
  const currentHistory = JSON.stringify(props.reqHistory);
  return (
    <nav className="historyArea">
      <textarea
        className="displayHistory"
        id="historyBox"
        name="historyDisplay"
        cols="50"
        rows="4"
        placeholder="History"
        value={currentHistory}
      ></textarea>
    </nav>
  );
}

// In order to display more than one reqItem, things need to be managed from state in the container component.
// Testing is also needed, as well as CSS work.

import React from 'react';
import { styles } from './Response.css';

export default function Response(props) {
  return (
    <nav className="resArea">
      <textarea
        className="displayJSON"
        id="resBox"
        name="resDisplay"
        cols="50"
        defaultValue="Res Displays Here"
      ></textarea>
    </nav>
  );
}

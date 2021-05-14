import React from 'react';
import { styles } from './Controls.css';

export default function Controls(props) {
  return (
    <nav className="formArea">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="req-url">URL</label>
        <input
          id="req-url"
          type="text"
          value={props.currentValue}
          onChange={props.handleChange}
        />
        <label className="httpMethods">
          <input type="radio" name="Method" value="GET" />
          <img src="../../../assets/otter-GET.png" className="methodImg" />
        </label>
        <label className="httpMethods">
          <input type="radio" name="Method" value="POST" />
          <img src="../../../assets/otter-POST.png" className="methodImg" />
        </label>
        <label className="httpMethods">
          <input type="radio" name="Method" value="PUT" />
          <img src="../../../assets/otter-PUT.png" className="methodImg" />
        </label>
        <label className="httpMethods">
          <input type="radio" name="Method" value="DELETE" />
          <img src="../../../assets/otter-DELETE.png" className="methodImg" />
        </label>
        <textarea id="jsonBox" name="jsonEntry" rows="8" cols="50">
          Raw JSON Here
        </textarea>
        <input type="submit" value="Go!" aria-label="send-req" />
      </form>
    </nav>
  );
}

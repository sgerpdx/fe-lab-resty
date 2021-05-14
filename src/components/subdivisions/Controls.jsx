import React from 'react';
import { styles } from './Controls.css';

export default function Controls(props) {
  return (
    <nav className="formArea">
      <form className="formControl" onSubmit={props.handleSubmit}>
        <label className="inputURL" htmlFor="req-url">
          URL{' '}
          <input
            id="req-url"
            type="text"
            value={props.currentValue}
            onChange={props.handleChange}
          />
        </label>
        <nav className="radioMethod">
          {' '}
          <label className="httpMethods">
            <input type="radio" name="Method" value="GET" />
            <img
              src="../../../assets/otter-GET.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input type="radio" name="Method" value="POST" />
            <img
              src="../../../assets/otter-POST.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input type="radio" name="Method" value="PUT" />
            <img
              src="../../../assets/otter-PUT.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input type="radio" name="Method" value="DELETE" />
            <img
              src="../../../assets/otter-DELETE.png"
              className="methodImg"
              width="70"
            />
          </label>
        </nav>
        <input
          className="submitForm"
          type="submit"
          value="Go!"
          aria-label="send-req"
        />
        <textarea
          className="inputJSON"
          id="jsonBox"
          name="jsonEntry"
          rows="8"
          cols="50"
        >
          Raw JSON Here
        </textarea>
      </form>
    </nav>
  );
}

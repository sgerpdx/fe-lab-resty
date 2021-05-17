import React from 'react';
import { styles } from './Controls.css';

export default function Controls({
  handleSubmit,
  currentValue,
  handleChange,
  jsonText,
}) {
  return (
    <nav className="formArea">
      <form className="formControl" onSubmit={handleSubmit}>
        <label className="inputURL" htmlFor="req-url">
          URL{' '}
          <input
            id="req-url"
            type="text"
            value={currentValue}
            onChange={handleChange}
          />
        </label>
        <section role="radiogroup" className="radioMethod">
          {' '}
          <label className="httpMethods">
            <span>get</span>
            <input
              aria-label="Method"
              type="radio"
              name="getMethod"
              value="GET"
            />
            <img
              src="../../../assets/otter-GET.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input role="radio" type="radio" name="Method" value="POST" />
            <img
              src="../../../assets/otter-POST.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input role="radio" type="radio" name="Method" value="PUT" />
            <img
              src="../../../assets/otter-PUT.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input role="radio" type="radio" name="Method" value="DELETE" />
            <img
              src="../../../assets/otter-DELETE.png"
              className="methodImg"
              width="70"
            />
          </label>
        </section>
        <input
          className="submitForm"
          type="submit"
          value="Go!"
          aria-label="send-req"
        />
        <textarea
          className="inputJSON"
          id="jsonBox"
          aria-label="JSON Input"
          rows="8"
          cols="50"
          defaultValue="Enter JSON Here"
        ></textarea>
      </form>
    </nav>
  );
}

import React from 'react';
import { styles } from './Controls.css';

export default function Controls({
  handleSubmit,
  currentValue,
  handleChange,
  handleClick,
  onChange,
}) {
  return (
    <nav className="formArea">
      <form className="formControl" onSubmit={handleSubmit}>
        <p>Enter API Request Info:</p>
        <label className="inputURL" htmlFor="req-url">
          URL:{' '}
          <input
            id="req-url"
            type="text"
            size="48"
            value={currentValue}
            onChange={handleChange}
          />
        </label>
        <section role="radiogroup" className="radioMethod">
          {' '}
          <p>Method:</p>
          <label className="httpMethods">
            <input
              aria-label="Get Method"
              type="radio"
              name="Method"
              value="GET"
              onChange={handleClick}
            />
            <img
              src="../../../assets/otter-GET.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input
              aria-label="Post Method"
              type="radio"
              name="Method"
              value="POST"
              onChange={handleClick}
            />
            <img
              src="../../../assets/otter-POST.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input
              aria-label="Put Method"
              type="radio"
              name="Method"
              value="PUT"
              onChange={handleClick}
            />
            <img
              src="../../../assets/otter-PUT.png"
              className="methodImg"
              width="70"
            />
          </label>
          <label className="httpMethods">
            <input
              aria-label="Delete Method"
              type="radio"
              name="Method"
              value="DELETE"
              onChange={handleClick}
            />
            <img
              src="../../../assets/otter-DELETE.png"
              className="methodImg"
              width="70"
            />
          </label>
        </section>
        <textarea
          className="inputJSON"
          id="jsonBox"
          aria-label="JSON Input"
          rows="8"
          cols="50"
          placeholder="Input optional Raw JSON here for POST/PUT requests"
          onChange={onChange}
        ></textarea>
        <p>💼</p>
        <input
          className="submitForm"
          type="submit"
          defaultValue="Send"
          aria-label="send-req"
        />
      </form>
    </nav>
  );
}

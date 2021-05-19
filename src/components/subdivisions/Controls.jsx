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
          <p>Choose HTTP Method:</p>
          <label className="httpMethods">
            <input
              aria-label="Get Method"
              type="radio"
              name="getMethod"
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
        <p>Optional Raw JSON Input:</p>
        <textarea
          className="inputJSON"
          id="jsonBox"
          aria-label="JSON Input"
          rows="8"
          cols="50"
          placeholder="Edit the object for POST/PUT and then delete this sentence (type_id = 1 or 2):
          {
            planet: 'name',
            diameter: 0,
            gravity: '0.0',
            magnetic_field_strong: false,
            owner_id: 1,
            type_id: 1
        }"
          onChange={onChange}
        ></textarea>
        <p>💼</p>
        <input
          className="submitForm"
          type="submit"
          value="Send"
          aria-label="send-req"
        />
      </form>
    </nav>
  );
}

import React from 'react';

export default function Controls(props) {
  return (
    <nav>
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
        <input type="submit" value="Go!" aria-label="send-req" />
      </form>
    </nav>
  );
}

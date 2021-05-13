import React from 'react';

export default function Controls(props) {
  return (
    <nav>
      <input
        type="text"
        value={props.currentValue}
        onChange={props.handleChange}
      />
    </nav>
  );
}

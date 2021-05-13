import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';

export default class OtterRestContainer extends Component {
  state = {
    urlText: 'James',
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  render() {
    console.log(this.state.urlText);
    return (
      <div>
        <nav>
          <Controls
            currentValue={this.state.urlText}
            handleChange={this.handleTextChange}
          />
        </nav>
      </div>
    );
  }
}

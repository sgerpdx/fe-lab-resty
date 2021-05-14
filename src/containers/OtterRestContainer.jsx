import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';

export default class OtterRestContainer extends Component {
  state = {
    urlText: 'James',
    loading: true,
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  render() {
    console.log(this.state.urlText);

    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

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

import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';
import Response from '../components/subdivisions/Response';
import History from '../components/subdivisions/History';

export default class OtterRestContainer extends Component {
  state = {
    urlText: 'James',
    loading: true,
    reqURL: '',
    jsonRes: [],
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ reqURL: e.target.value });
    //alert('You have entered the URL ' + this.state.reqURL);
  };

  render() {
    console.log(this.state.urlText);

    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

    return (
      <div>
        <nav>
          <History />
          <Controls
            currentValue={this.state.urlText}
            handleChange={this.handleTextChange}
            handleSubmit={this.handleFormSubmit}
          />
          <Response res={this.state.jsonRes} />
        </nav>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';
import Response from '../components/subdivisions/Response';
import History from '../components/subdivisions/History';
import { getPlanets } from '../services/API';

const URL = 'https://lit-shore-34578.herokuapp.com';
export default class OtterRestContainer extends Component {
  state = {
    urlText: 'James',
    loading: true,
    reqURL: '',
    jsonRes: [],
    jsonHolder: 'Raw JSON Here',
    selectedOption: 'GET',
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  onValueChange(e) {
    this.setState({
      selectedOption: e.target.value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ reqURL: e.target.value });
    console.log(this.state.selectedOption);
  };

  render() {
    console.log(this.state.urlText);
    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

    return (
      <div>
        <History />
        <Controls
          jsonText={this.state.jsonHolder}
          currentValue={this.state.urlText}
          handleChange={this.handleTextChange}
          handleSubmit={this.handleFormSubmit}
          checked={this.state}
        />
        <Response res={this.state.jsonRes} />
      </div>
    );
  }
}

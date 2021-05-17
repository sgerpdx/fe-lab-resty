import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';
import Response from '../components/subdivisions/Response';
import History from '../components/subdivisions/History';
import { getPlanets } from '../services/API';

const URL = 'https://lit-shore-34578.herokuapp.com';
export default class OtterRestContainer extends Component {
  state = {
    urlText: '',
    loading: true,
    reqURL: '',
    jsonRes: [],
    methodSelection: '',
    jsonHolder: '',
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  handleValueChange = (e) => {
    console.log('///etv', e.target.value);

    this.setState({
      methodSelection: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ reqURL: e.target.value });
    console.log(this.state.selectedOption);
  };

  render() {
    console.log('///option', this.state.methodSelection);
    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

    return (
      <div>
        {/* <History /> */}
        <Controls
          currentValue={this.state.urlText}
          handleChange={this.handleTextChange}
          handleSubmit={this.handleFormSubmit}
          handleClick={this.handleValueChange}
        />
        <Response res={this.state.jsonRes} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';
import Response from '../components/subdivisions/Response';
//import History from '../components/subdivisions/History';
import { getPlanets } from '../services/API';

//const URL = 'https://lit-shore-34578.herokuapp.com/planets';
export default class OtterRestContainer extends Component {
  state = {
    urlText: 'https://lit-shore-34578.herokuapp.com/planets',
    loading: true,
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

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const returnedJson = await getPlanets(this.state.urlText);
    console.log('|||returned JSON', returnedJson);
    this.setState({ jsonRes: returnedJson });
  };

  render() {
    console.log('///option', this.state.jsonRes);
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

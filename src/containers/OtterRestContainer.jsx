import React, { Component } from 'react';
import Controls from '../components/subdivisions/Controls';
import Response from '../components/subdivisions/Response';
import History from '../components/subdivisions/History';
import {
  getPlanets,
  postPlanet,
  updatePlanet,
  deletePlanet,
} from '../services/API';
export default class OtterRestContainer extends Component {
  state = {
    urlText: 'https://lit-shore-34578.herokuapp.com/planets',
    loading: true,
    jsonRes: [],
    methodSelection: '',
    reqJson: null,
    reqHistory: [],
  };

  handleTextChange = (e) => {
    //e.preventDefault();
    this.setState({ urlText: e.target.value });
  };

  handleValueChange = (e) => {
    this.setState({
      methodSelection: e.target.value,
    });
  };

  handleJsonReq = (e) => {
    this.setState({ reqJson: e.target.value });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    this.historyUpdate();
    if (this.state.methodSelection === 'GET') {
      const returnedJson = await getPlanets(this.state.urlText);
      this.setState({ jsonRes: returnedJson });
    }
    if (this.state.methodSelection === 'POST') {
      const returnedJson = await postPlanet(
        this.state.urlText,
        this.state.reqJson
      );
      this.setState({ jsonRes: returnedJson });
    }
    if (this.state.methodSelection === 'PUT') {
      const URL = this.state.urlText;
      const baseURL = URL.slice(0, 45);
      const planetId = URL.slice(46, 47);
      const returnedJson = await updatePlanet(
        baseURL,
        planetId,
        this.state.reqJson
      );
      this.setState({ jsonRes: returnedJson });
    }
    if (this.state.methodSelection === 'DELETE') {
      const URL = this.state.urlText;
      const baseURL = URL.slice(0, 45);
      const planetId = URL.slice(46, 47);
      const returnedJson = await deletePlanet(baseURL, planetId);
      this.setState({ jsonRes: returnedJson });
    }
  };

  historyUpdate = () => {
    const newReqItem = {
      method: this.state.methodSelection,
      url: this.state.urlText,
    };
    console.log('///newReqItem', newReqItem);
    const temporaryHistory = this.state.reqHistory;
    const newReqHistory = [...temporaryHistory, newReqItem];
    console.log('>>>newReqHistory', newReqHistory);
    console.log('typeof reqHistory:', typeof newReqHistory);

    this.setState({
      reqHistory: newReqHistory,
    });
    console.log('reqHistory:', this.state.reqHistory);
  };

  render() {
    console.log('reqHistory in render:', this.state.reqHistory);
    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

    return (
      <div>
        <History reqHistory={this.state.reqHistory} />
        <Controls
          currentValue={this.state.urlText}
          handleChange={this.handleTextChange}
          handleSubmit={this.handleFormSubmit}
          handleClick={this.handleValueChange}
          onChange={this.handleJsonReq}
        />
        <Response res={this.state.jsonRes} />
      </div>
    );
  }
}

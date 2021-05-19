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
import styles from '../components/app/App.css';
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
    const temporaryHistory = this.state.reqHistory;
    const newReqHistory = [...temporaryHistory, newReqItem];

    this.setState({
      reqHistory: newReqHistory,
    });
  };

  render() {
    console.log('methodSelection:', this.state.methodSelection);
    // const { loading } = this.state;

    // if (loading) return <h3>Loading...</h3>;

    return (
      <div className={styles.containerArea}>
        <section className={styles.contLeft}>
          <History reqHistory={this.state.reqHistory} />
        </section>
        <section className={styles.contRight}>
          <Controls
            currentValue={this.state.urlText}
            handleChange={this.handleTextChange}
            handleSubmit={this.handleFormSubmit}
            handleClick={this.handleValueChange}
            onChange={this.handleJsonReq}
          />
          <Response res={this.state.jsonRes} />
        </section>
      </div>
    );
  }
}

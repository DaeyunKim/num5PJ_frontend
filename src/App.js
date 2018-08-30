import React, { Component,Fragment } from 'react';
import './App.css';
import Header from './container/header/Header';
import InfoContainer from './container/infoContainer/InfoContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <InfoContainer></InfoContainer>
      </Fragment>
    );
  }
}

export default App;

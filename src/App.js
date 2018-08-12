import React, { Component,Fragment } from 'react';
import './App.css';
import Header from './container/header/Header';
import InfoContainer from './container/infoContainer/InfoContainer';
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Fragment>
        <Header></Header>
        <InfoContainer></InfoContainer>
      </Fragment>
    );
  }
}

export default App;

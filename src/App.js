import React, { Component } from 'react';
import Header from './container/header/Header';
import InfoContainer from './container/infoContainer/InfoContainer';
// import './styles/infoWrapper.css'
class App extends Component {
  render() {
    return (
      <div > 
        <Header></Header>
        <InfoContainer></InfoContainer>        
      {/* </Fragment> */}
      </div>
    );
  }
}

export default App;

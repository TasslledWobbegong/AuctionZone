import React, { Component } from 'react';
import './styles/App.scss';
import MainContainer from './containers/MainContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='pages'>
          <h1>AUCTION ZONE is here to stay!</h1>
          <Routes>
            <Route path="/" element={<MainContainer />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
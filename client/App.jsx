import React, { Component } from 'react';
import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContainer from './containers/MainContainer';
// import PostContainer from './containers/PostContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='pages'>
          {/* <h1>AUCTION ZONE is here to stay!</h1> */}
          <Routes>
            <Route path="/" element={<MainContainer />} />
            {/* <Route path="/post" element={<PostContainer />} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
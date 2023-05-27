import React, { Component } from 'react';
import './styles/App.scss';

class App extends Component {
    render() {
      return (
        <div className='App'>
            <div className='pages'>
                <h1>AUCTION ZONE is here to stay!</h1>
                <MainContainer/>
            </div>
        </div>
      );
    }
  }
  
  export default App;
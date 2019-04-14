import React, { Component } from 'react';

import './App.css';
import Users from './components/Users/Users';

class App extends Component {



  render() {
    return (
      <div className="main-container">
        <Users></Users>
      </div>
    );
  }
}

export default App;

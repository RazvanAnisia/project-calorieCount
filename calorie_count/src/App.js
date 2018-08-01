import React, { Component } from 'react';
import logo from './assets/logo_web_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><a href='/'>The app</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
          </nav>

        </header>
        <div className ='hero'>

        </div>
      </div>
    );
  }
}

export default App;

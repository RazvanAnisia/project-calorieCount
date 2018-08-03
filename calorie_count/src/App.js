import React, { Component } from 'react';
import  classes from './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import CalorieApp from './containers/CalorieApp/CalorieApp';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header/>
        <Hero/>
        <CalorieApp/>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React,{Component} from 'react';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import CalorieApp from '../../containers/CalorieApp/CalorieApp';
import Footer from '../../components/footer/footer';
import {Route,Switch} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import ContactPage from '../../components/ContactPage/ContactPage';
import RegisterPage from '../../containers/RegisterPage/RegisterPage';

class View extends Component{
  state={

  }
  render(){
    return(
      <div>
          <Header/>
           <Switch>
            <Route path='/calorie-count'  component={CalorieApp}/>
            <Route path = '/login' component ={LoginPage}/>
            <Route path='/contact' exact  component={ContactPage}/>
            <Route path='/register' exact  component={RegisterPage}/>
            <Route path='/' exact  component={Hero}/>
          </Switch>
          <Footer/>
        </div>
    )
  }
}
export default View;
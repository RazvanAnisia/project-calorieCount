import React,{Component} from 'react';
import classes from './LoginPage.css';
import { NavLink } from '../../../node_modules/react-router-dom';
import {Animated} from "react-animated-css";

class LoginPage extends Component{
   render(){
    return(
      <Animated animationIn ="bounceInRight" animationOut ="fadeOut" isVisible ={true}>
        <div className ={classes.loginPage}>
          <div className ={classes.wrap}>
            <h1>Login</h1>
            <h5>New User?Please Register
              <NavLink to ="/register">here</NavLink> then
            </h5>
            <form>
              <label htmlFor ='email'>Email</label>
              <input id ='email' type='text'/> 
              <label htmlFor ='password'>Password</label>
              <input id ='password' type='text'/>
              <input type ='submit'/>
            </form>
          </div> 
        </div>
      </Animated>
    )
  }
}

export default LoginPage;
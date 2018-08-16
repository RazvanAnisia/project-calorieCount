import React,{Component} from 'react';
import classes from './RegisterPage.css';
import {Animated} from "react-animated-css";

class RegisterPage extends Component{
   render(){
    return(
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
        <div className={classes.registerPage}>
          <div className={classes.wrap}>
            <h1>Register</h1>
            <h5>Create an account</h5>
            <form>
              <label htmlFor = 'name'>Name</label>
              <input id = 'name' type = 'text'/>
              <label htmlFor = 'email'>Email</label>
              <input id = 'email' type='text'/> 
              <label htmlFor = 'password'>Password</label>
              <input id = 'password' type = 'text'/>
              <input type = 'submit'/>
            </form>
          </div> 
        </div>
      </Animated>
    )
  }
}

export default RegisterPage;
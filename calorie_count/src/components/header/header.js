import React from 'react';
import classes from './header.css';
import Logo from '../logo/logo';
import {NavLink} from 'react-router-dom';

const header = ()=>{
  return(
    <div>
      <header className={classes.Header}>
          <Logo/>
            <nav>
              <ul className={classes.navElements}>
                <li><NavLink activeStyle={{color:'#a6edba', borderBottom:'2px solid #a6edba', paddingBottom:'0.6rem'}} exact to='/'>Home</NavLink></li>
                <li><NavLink activeStyle={{color:'#a6edba', borderBottom:'2px solid #a6edba', paddingBottom:'0.6rem'}} exact to='/calorie-count' >The App</NavLink></li>
                <li><NavLink  activeStyle={{color:'#a6edba', borderBottom:'2px solid #a6edba', paddingBottom:'0.6rem'}}to='/login' exact>Login</NavLink></li>
                <li><NavLink  activeStyle={{color:'#a6edba',borderBottom:'2px solid #a6edba', paddingBottom:'0.6rem'}} to='/contact' exact>Contact</NavLink></li>
              </ul>
            </nav>
            
      </header>
     
    </div>
  )
}

export default header;
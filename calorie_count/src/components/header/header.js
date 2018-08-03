import React from 'react';
import classes from './header.css';
import Logo from '../logo/logo';

const hero = ()=>{
  return(
    <header className={classes.Header}>
         <Logo/>
          <nav>
            <ul className={classes.navElements}>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>The app</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
          </nav>
   </header>
  )
}

export default hero;
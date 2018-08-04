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
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/calorie-count' exact>The App</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
              </ul>
            </nav>
            
      </header>
     
    </div>
  )
}

export default header;
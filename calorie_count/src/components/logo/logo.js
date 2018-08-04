import React from 'react';
import classes from './logo.css';
import calorieLogo from '../../assets/logo_web_white.png';
import { NavLink } from '../../../node_modules/react-router-dom';

const logo = ()=>{
  return <NavLink to='/'><img src={calorieLogo} className={classes.Logo} alt="logo" /></NavLink>
}

export default logo;
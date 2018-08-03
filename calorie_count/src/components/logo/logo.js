import React from 'react';
import classes from './logo.css';
import calorieLogo from '../../assets/logo_web_white.png';

const logo = ()=>{
  return <img src={calorieLogo} className={classes.Logo} alt="logo" />
}

export default logo;
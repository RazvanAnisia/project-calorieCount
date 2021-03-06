import React from 'react';
import classes from './footer.css';
import OpenFoodLogo from '../../assets/openFood.png';
import Logo from '../../assets/logo_web_white.png';

const footer = ()=>{
  return(
    <footer className={classes.footer}>
      <p>	&copy; Razvan Anisia 2018</p>
      <p>This app uses the Open Food Facts API, which we strongly encourage you to support and contribute to</p>
      <img src={OpenFoodLogo} alt={'OpenFoodFacts'}/>
      <ul className={classes.links} >
          <li><a href='https://world.openfoodfacts.org/'>Open Food Facts</a></li>
          <li><a href="https://github.com/RazvanAnisia/CalorieCount">Github Repo</a></li>
      </ul>
      <img  className={classes.logo} alt={'Logo'}src={Logo}/>
      
   </footer>

  )
}

export default footer;
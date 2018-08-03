import React from 'react';
import classes from './hero.css';


const hero = ()=>{
  return(
    <div className = {classes.Hero}>  
      <h1 className={classes.HeroTitle}>Welcome to the Calorie Count app!</h1>
      <p>Are you finding weight loss a challenge? <br/>
        Are diets and exercises alone not working for you? <br/>
        <br/>
        You think you are doing all the right things, <br/>
        but there is one piece of the puzzle <br/>
        that could drastically improve your results. <br/>
        There is no better way of becoming aware of the quality <br/> 
        and the macro-nutrients from your food, <br/>
         than actually tracking your calories.<br/>
         <br/>
        Calorie Count is an app that can  help you<br/>
         keep track of your day to day meals, and their quality.
         
     </p>
    </div>
  )
}

export default hero;
import React from 'react';
import classes from './hero.css';


const hero = ()=>{
  return(
    <div className = {classes.Hero}>  
      <h1 className={classes.HeroTitle}>Welcome to the Calorie Count app!</h1>
      <p>Are you finding <span className={classes.highlight}>weight loss</span> a challenge? <br/>
        Are diets and exercises alone not working for you? <br/>
        <br/>
        You think you are doing all the right things, <br/>
        but there is one <span className={classes.highlight}>piece of the puzzle </span><br/>
        that could drastically <span className={classes.highlight}>improve your results.</span> <br/>
        There is no better way of becoming aware of the quality <br/> 
        and the macro-nutrients from your food, <br/>
         than actually <span className={classes.highlight}>tracking your calories</span>.<br/>
         <br/>
        Calorie Count is an app that can  <span className={classes.highlight}>help you</span><br/>
         keep track of your day to day meals, and their quality.
         
     </p>
    </div>
  )
}

export default hero;
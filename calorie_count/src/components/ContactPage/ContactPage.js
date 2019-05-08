import React from 'react';
import classes from './contactPage.css';
import {Animated} from "react-animated-css";

const contactPage = ()=>{
      return(
        <div className ={classes.contactPage}>
          <div className ={classes.wrap}>
            <h1>Contact</h1>
            <p>This app was created using React.js and the Open Food Facts API.</p>
            <p>If you wish to contact the creator ,you can find him using these links</p>
            <ul className ={classes.links}>
                <li>
                  <a href ='https://github.com/RazvanAnisia' target='_blank'
                  rel='noreferrer noopener'>Github</a>
                </li>
                <li>
                  <a href ="https://www.linkedin.com/in/razvan-anisia-917608162/" target='_blank'
                   rel ='noreferrer noopener'>LinkedIn</a>
                </li>
                <li>
                  <a href ='https://www.facebook.com/profile.php?id=100003691274985&ref=bookmarks'
                   target ='_blank' rel='noreferrer noopener'>Facebook</a>
                </li>

            </ul>
          </div>
        </div>
      )
  }

export default contactPage;
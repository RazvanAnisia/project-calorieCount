import React from 'react';
import classes from './productForm.css';

const productForm = (props)=>{
  return(
    <form onSubmit={props.submit} className={classes.BarcodeForm}>
          <input  className={classes.BarcodeInput}type='text' placeholder='Product bardcode here'/>
          <br/>
          <input className={classes.submitButton} type='Submit' />
    </form>
  )
}



export default productForm;
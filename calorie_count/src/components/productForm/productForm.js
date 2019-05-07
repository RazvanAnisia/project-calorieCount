import React from 'react';
import classes from './productForm.css';

const productForm = (props)=>{
  return(
    <form onSubmit={props.submit} className={classes.barcodeForm}>
          <input  className={classes.barcodeInput} type='text' placeholder='Product bardcode' autoFocus/>
          <br/>
          <input className={classes.submitButton} type='Submit' defaultValue="Search"/>
    </form>
  )
}



export default productForm;
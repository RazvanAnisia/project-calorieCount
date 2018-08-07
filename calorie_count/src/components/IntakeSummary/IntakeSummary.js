import React,{Component} from 'react';
import classes from './IntakeSummary.css';

class intakeSummary extends Component {
  removeProduct=(productIndex)=>{
    //Make copy of props
    const products = [...this.props.productsData];
    //delete the product from the array
    products.splice(productIndex,1)
    //set the state in the parent component
    this.props.setState({products: products}, this.props.update);
  }
  render(){
    //make copy of state passed as props
    const productsData = [...this.props.productsData];
    //map through an create the li's for each product with the data
    let summary = productsData.map((product,index)=>{
      return (
        <li key={index} ><span  className={classes.name}>{product.name}</span><span>{product.quantity}g</span> <span>{product.calories}kcal</span>
        <button onClick={()=>this.removeProduct(index)}>X</button> </li>
      )
    })

    return(
      <div>
        <ul className={classes.summary}>
        <p>Keep in mind, the average intake for an adult male is between 2000-2500 kcal/day</p>
        <p>Try to keep your intake in this range</p>
           {summary}              
       </ul>
      </div>
    )
  }
  
}
export default intakeSummary;

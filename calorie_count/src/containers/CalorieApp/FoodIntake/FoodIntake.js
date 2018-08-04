import React,{Component}  from 'react';
import classes from './FoodIntake.css';
//54491472
class FoodIntake extends Component{
  state={
    products:[],
    total:{
      totalCalories:null,
      totalCarbs:null,
      totalProtein:null,
      totalFats:null,
    }
  }
  getQuantityHandler = (e)=>{
    const input = e.target.children[1].value;
    this.calculateIntake(input)
    e.preventDefault();

    let products = [...this.state.products];
    let name = this.props.product;
    products.push(name)
    this.setState({products:products})

  }
  calculateIntake = (inp)=>{
     const inpNum = Number(inp);
    //!!!make a copy of the props that were passed into this component
    const nutriments = {...this.props.nutrients};
    //make a copy of the state in this component
    const totalCalc = {...this.state.total}

    let energy = Number(nutriments.energy_value);
    let carbs = Number(nutriments.carbohydrates_100g);
    let fats = Number(nutriments.fat_100g);
    let protein = Number(nutriments.proteins_100g);
    console.log(protein, fats)
    //make calculations
    let caloriesCalc = (energy/(100/inpNum)).toFixed(2);
    let carbsCalc = (carbs/(100/inpNum)).toFixed(2);
    let fatsCalc = (fats/(100/inpNum)).toFixed(2);
    let proteinCalc = (protein/(100/inpNum)).toFixed(2)

    console.log(proteinCalc, fatsCalc)

    totalCalc.totalCalories = caloriesCalc;
    totalCalc.totalCarbs = carbsCalc;
    totalCalc.totalFats = fatsCalc;
    totalCalc.totalProtein = proteinCalc;

    //set the state to the new state
    this.setState({total:totalCalc})
  }

  render(){
    let showInfo;
    if(this.state.products.length >0){
      showInfo = (<ul className={classes.info}>
          <li><span>Calories:</span> {this.state.total.totalCalories}Kcal</li>
          <li><span>Carbs:</span> {this.state.total.totalCarbs} g</li>
          <li><span>Protein:</span> {this.state.total.totalProtein}g</li>
          <li><span>Fats:</span> {this.state.total.totalFats}g</li>
        </ul>)
    }else{
      showInfo=null;
    }
       return(
      <div className={classes.FoodIntake}>
        <p>Add this to your daily intake:</p>
        <form className={classes.form} onSubmit={this.getQuantityHandler}>
          <label>Quantity <span>in g: </span></label>
          <input type="text" placeholder="write quantity"></input>
          <input type="submit" value="Add"></input>
        </form>
        <h4>Total intake</h4>
        {showInfo}
      </div>
    )
  }
}
export default FoodIntake;
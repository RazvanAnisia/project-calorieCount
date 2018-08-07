import React,{Component}  from 'react';
import classes from './FoodIntake.css';
import IntakeSummary from '../../../components/IntakeSummary/IntakeSummary';
//54491472
class FoodIntake extends Component{
  state={
    products:[],
    total:{
      totalCalories:null,
      totalCarbs:null,
      totalProtein:null,
      totalFats:null,
    },
    showIntakeSummary:false
  }
  getQuantityHandler = (e)=>{
    const input = e.target.children[1].value;
    this.calculateIntake(input)
    e.preventDefault();

  }
  calculateIntake = (inp)=>{
     const inpNum = Number(inp);
    //!!!make a copy of the props that were passed into this component
    const nutriments = {...this.props.nutrients};
   
    let energy = Number(nutriments.energy_value);
    let carbs = Number(nutriments.carbohydrates_100g);
    let fats = Number(nutriments.fat_100g);
    let protein = Number(nutriments.proteins_100g);
    //make calculations
    let caloriesCalc = (energy/(100/inpNum)).toFixed(2);
    let carbsCalc = (carbs/(100/inpNum)).toFixed(2);
    let fatsCalc = (fats/(100/inpNum)).toFixed(2);
    let proteinCalc = (protein/(100/inpNum)).toFixed(2)
    
    //make copy of state
    const products = [...this.state.products];
    const name = this.props.product;
    const newProduct ={}
    newProduct.name = name;
    newProduct.calories = caloriesCalc;
    newProduct.carbs = carbsCalc;
    newProduct.fats = fatsCalc;
    newProduct.proteins = proteinCalc;
    newProduct.quantity = inpNum;
    products.push(newProduct);
    //set the state to the new state
    // this.setState({total:totalCalc}, ()=> this.updateTotal)
    this.setState({products:products}, this.updateTotal)
  }

  updateTotal=()=>{
    const total = {...this.state.total};
    const products = [...this.state.products];
    console.log(products)
    let calories = 0;
    let proteins = 0;
    let fats = 0;
    let carbs = 0;
    products.forEach((el)=>{
        calories += Number(el.calories);
        proteins += Number(el.proteins);
        carbs += Number(el.carbs);
        fats += Number(el.fats);

      })
    total.totalCalories = calories.toFixed(2);
    total.totalProtein = proteins.toFixed(2);
    total.totalFats = fats.toFixed(2);
    total.totalCarbs = carbs.toFixed(2);   
    console.log(total)
    this.setState({total:total});

  }
  showSummary =()=>{
  const show =!this.state.showIntakeSummary;
  this.setState({showIntakeSummary:show})
  }
  render(){
    let showInfo;
    let summary;
    if(this.state.showIntakeSummary){
      summary = <IntakeSummary productsData={this.state.products} setState={(p,c)=>this.setState(p,c)} update={this.updateTotal}/>;
    }else{
      summary = null;
    }
    if(this.state.products.length >0){
      showInfo = (
     <div>
        <ul className={classes.info}>
            <li><span>Calories:</span> {this.state.total.totalCalories}Kcal</li>
            <li><span>Carbs:</span> {this.state.total.totalCarbs} g</li>
            <li><span>Protein:</span> {this.state.total.totalProtein}g</li>
            <li><span>Fats:</span> {this.state.total.totalFats}g</li>
        </ul>
        <button onClick={this.showSummary}>{this.state.showIntakeSummary ? 'Hide Summary' :'Show Summary' }</button>
        {summary}
      </div>
     )
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
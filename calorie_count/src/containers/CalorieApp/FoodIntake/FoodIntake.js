import React,{Component}  from 'react';
import classes from './FoodIntake.css';
import IntakeSummary from '../../../components/IntakeSummary/IntakeSummary';
import potatoImg from '../../../assets/potato_surprised.jpeg';
//54491472
class FoodIntake extends Component{
  state ={
    products:[],
    total:{
      totalCalories:null,
      totalCarbs:null,
      totalProtein:null,
      totalFats:null,
    },
    showIntakeSummary:false,
    quantityError:null
  }
  getQuantityHandler = (e)=>{
    const input = e.target.children[1].value;
    this.calculateIntake(input)
    e.preventDefault();

  }
  calculateIntake = (inp)=>{
    this.setState({quantityError:null})
    const inpNum = Number(inp);
    //make a copy of the props that were passed into this component
    const nutriments = {...this.props.nutrients};

    // input validation
    if(inp === '' || inp === ' ' || isNaN(inp) || Number(inp)>4000){
      this.setState({quantityError:'Please input a valid quantity'})
    }else{

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
      //make new object and add properties to it
      const newProduct ={};
      newProduct.name = name;
      newProduct.calories = caloriesCalc;
      newProduct.carbs = carbsCalc;
      newProduct.fats = fatsCalc;
      newProduct.proteins = proteinCalc;
      newProduct.quantity = inpNum;
      products.push(newProduct);
      //set the state to the new state
      this.setState({products:products}, this.updateTotal)
    }

  }

  updateTotal=()=>{
    const total = {...this.state.total};
    const products = [...this.state.products];

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
    this.setState({total:total});

  }

  showSummary =()=>{
    const show = !this.state.showIntakeSummary;
    this.setState({showIntakeSummary:show})
  }


  render(){
    let showInfo, summary, error, potato = null;

    if(this.state.quantityError){
      error = <h2 className={classes.error}>{this.state.quantityError}</h2>;
    }

    if(this.state.showIntakeSummary){
      summary =
      <IntakeSummary
         productsData={this.state.products}
         setState={(p,c)=>this.setState(p,c)}
         update={this.updateTotal}
      />;
    }
    if(this.state.products.length >0){
      showInfo = (
     <div className={classes.showInfo}>
         <h4>Total intake</h4>
        <ul className = {classes.info}>
            <li><span>Calories:</span> {this.state.total.totalCalories}Kcal</li>
            <li><span>Carbs:</span> {this.state.total.totalCarbs} g</li>
            <li><span>Protein:</span> {this.state.total.totalProtein}g</li>
            <li><span>Fats:</span> {this.state.total.totalFats}g</li>
        </ul>
        <button className = {this.state.showIntakeSummary ? classes.summaryBtn : classes.hideBtn}
                onClick={this.showSummary}>
                  {this.state.showIntakeSummary ? 'Hide Summary' :'Show Summary' }
        </button>
        {summary}
      </div>
     )
    }

    if(this.state.total.totalCalories > 2500){
      potato =
      <div className = {classes.potato}>
         <h3>Be careful with those calories!</h3>
        <img src = {potatoImg} alt ='potato ' /><br/>
      </div>;
    }

       return(
        <div className={classes.intakeContainer}>
          <p className={classes.msg}> Want to add this to you daily intake?</p>
          <form className = {classes.form} onSubmit ={this.getQuantityHandler}>
            <label>Quantity <span>in grams: </span><br/></label>
            <input type="text" placeholder ="Quantity"></input>
            <input disabled = {this.props.invalid} type="submit" value ="Add"></input>
          </form>
          {error}

          {showInfo}
          {potato}
        </div>
    )
  }
}
export default FoodIntake;
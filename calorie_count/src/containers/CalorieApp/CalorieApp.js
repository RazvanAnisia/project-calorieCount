import React,{Component} from 'react';
import classes from './CalorieApp.css';
import axios from 'axios';
import ProductForm from '../../components/productForm/productForm';
import userLogo from '../../assets/user_red.png';
import nutrientsImg from '../../assets/barcode2.png';
import caloriesImg from '../../assets/calories_opt.png';
import {Animated} from "react-animated-css";
import FoodIntake from './FoodIntake/FoodIntake';


//  cola 54491472
class CalorieApp extends Component {
  state ={
    searchedProduct:'',
    displayed:'',
    values:{},
    spinner:false,
    error:null
  }

  getInputValue = (e)=>{
     this.setState({error:null})
    //set the searchedproduct in state to the input
    if(e.target.children[0].value === '' || e.target.children[0].value === ' ' ){
      this.setState({erorr:'Please input a valid barcode'})
    }
    this.setState({searchedProduct:e.target.children[0].value})
    //start showing the spinner
    
    this.setState({spinner:true})
    //fetch the information from the API using the input
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${e.target.children[0].value}.json`)
    .then(res=>{
      //check if the product was found or not
      console.log(res)
      if(res.data.status_verbose !== 'product not found' && res.data.code !==null){
        //update the state of displayed to be data we fetched
        this.setState({displayed:res.data});
        this.setState({spinner:false})
      }
      else{
        //show error
        this.setState({error:'We are sorry but we do not have this product in our database.'})
        console.log('no product found')
      }
      //run the function to get the values from the state
      this.getProductValuesHandler()
    })
    
    .catch(err =>{
      this.setState({error:'There was a problem'})
      console.log(err)
    })
    e.preventDefault()
  
  }

  getProductValuesHandler =()=>{
    //if there is a spinner remove it
    if(this.state.spinner === true){
      this.setState({spinner:false});
    }

    //make copy of state 
    let values = {...this.state.values}
    //make copy of the state,regarding the product info
    let data = {...this.state.displayed.product}
    
    if(this.state.displayed!== ''){
      console.log(data)
      //add these properties to the values object
      values.productName = data.product_name;
      values.quantity = data.quantity;
      values.imageUrl = data.image_url;
      values.imageNutrition = data.image_ingredients_url;
      values.NutritionPer = data.nutrition_data_per;
      values.nutriments = data.nutriments;
      console.log(this.state.values.nutriments)
      //set the state to the new state
      this.setState({values:values})
    }
  }
  render(){
    const info = this.state.values;
    let error = null;
    let displayNut = [];
    let allInfo = null;
    let intake;
    //if there are nutriments
    if(this.state.values.nutriments){
      var nutrients = {...this.state.values.nutriments}
      displayNut = [
        <li key={'energy'}><span>Energy:</span>{nutrients.energy_value} {nutrients.energy_unit}</li>,
        <li key={'carbs'}><span>Carbohydrates:</span> {nutrients.carbohydrates_100g} g </li>,
        <li key={'fats'}><span>Fats:</span> {nutrients.fat_100g} g </li>,
        <li key={'protein'}><span>Protein:</span>{nutrients.proteins_100g} g</li>,
        <li key={'sodium'}><span>Sodium: </span>{Math.ceil(nutrients.sodium_100g)} g</li>
      ]
    }
    if(this.state.spinner && this.state.error === null  ){
      allInfo = <div className={classes.lds}></div>;
    }else{
      allInfo = (
      <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}><div className={classes.Info}>
        <p className = {classes.name}>  {info.productName ? info.productName : null}</p>
        <p>{info.quantity}</p>
        <div className={classes.imgDiv}>
          <img className={classes.productImg} src={info.imageUrl} alt=''/>
          <img className={classes.productImgNutrition} src={info.imageNutrition} alt=''/>
        </div>
        <p> Per :{info.NutritionPer} </p>
        <ul>
          {displayNut}
        </ul>
        </div>
     </Animated>);
    }

    if(this.state.error){
      error = <h2 className={classes.error}>{this.state.error} {'But you can help us, and add it yourself using this link '}<a href='https://world.openfoodfacts.org/'>here</a> </h2>
    }else{
      error = null;
    }

    if(this.state.values){
      let info = this.state.values;
      intake = <FoodIntake serving={info.NutritionPer} product={info.productName} nutrients={this.state.values.nutriments} />
    }else{
      intake = <FoodIntake/>
    }
    
    return(
      <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
      <div className={classes.CalorieApp}>
      <h1>How does it work?</h1>
        <div className={classes.description}>
          <div>
            <p>1.You simply create an account</p>
            <img className={classes.HowTo} src={userLogo} alt='user'/>
          </div>
          <div>
            <p>2.Then input the product Barcode</p>
            <img className={classes.HowTo} src={nutrientsImg}  alt='nutrients'/>
          </div>
          <div>
            <p>3.Find out the information you need</p>
            <img className={classes.HowTo} src={caloriesImg}alt='calories'/>
          </div>
       </div>
        <p>It's as EASY as that.</p>
        <ProductForm submit={this.getInputValue}/>
        {error}
        {this.state.displayed ? allInfo : null}
        
         {intake}
        </div>
      </Animated>
    )
  }
}

export default CalorieApp;
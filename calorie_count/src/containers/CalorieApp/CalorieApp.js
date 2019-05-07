import React,{Component} from 'react';
import classes from './CalorieApp.css';
import axios from 'axios';
import ProductForm from '../../components/productForm/productForm';
import userLogo from '../../assets/user_red.png';
import nutrientsImg from '../../assets/barcode3.png';
import caloriesImg from '../../assets/calories_opt.png';
import {Animated} from "react-animated-css";
import FoodIntake from './FoodIntake/FoodIntake';


//  cola 54491472

class CalorieApp extends Component {
  state = {
    searchedProduct:'',
    displayed:'',
    values:{},
    spinner:false,
    error:null,
    invalidData:false
  }

  getInputValue = (e)=>{
    this.setState({error:null})
    //validation
    if(e.target.children[0].value === '' || e.target.children[0].value === ' ' || isNaN(e.target.children[0].value) ){
      this.setState({error:'Please input a valid barcode or add a new one '})
    }else{
      this.setState({searchedProduct:e.target.children[0].value, spinner:true})
      // this.setState({spinner:true})
      axios.get(`https://world.openfoodfacts.org/api/v0/product/${e.target.children[0].value}.json`)
    .then(res=>{
      //check if the product was found or not
      // console.log(res)
      if(res.data.status_verbose !== 'product not found' && res.data.code !== null){
      //update the state of displayed to be data we fetched
        this.setState({displayed:res.data});
        this.setState({spinner:false})
      }
      else{
        //show error
        this.setState(
          {error:`We are sorry but we do not have this product in our database.But you can help us, and add it yourself using this link `}
        )
        console.log('no product found')
      }
      //run the function to get the values from the state
      this.getProductValuesHandler()
    })
    .catch(err =>{
      this.setState({error:'There was a problem'})
      console.log(err)
    })
    }

    e.preventDefault()

  }

  getProductValuesHandler =()=>{
    //remove invalid data
    if(this.state.invalidData){
      this.setState({invalidData:false})
    }
    //if there is a spinner remove it
    if(this.state.spinner === true){
      this.setState({spinner:false});
    }
    //make copy of state
    let values = {...this.state.values};
    //make copy of the state,regarding the product info
    let data = {...this.state.displayed.product};

    if(this.state.displayed!== ''){

      //add these properties to the values object
      values.productName = data.product_name;
      values.quantity = data.quantity;
      values.imageUrl = data.image_url;
      values.imageNutrition = data.image_ingredients_url;
      values.NutritionPer = data.nutrition_data_per;
      values.nutriments = data.nutriments;

      if(!values.nutriments.energy_value){
        this.setState({invalidData:true})

      }
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
    let spinner = null;

    if (this.state.spinner) {
       spinner = <div className={classes.loader}>Loading...</div>;
    }
    //if there are nutriments
    if(this.state.values.nutriments){
      var nutrients = {...this.state.values.nutriments}
      displayNut = [
        <li key={'energy'}>
          <span>Energy:</span>
          {nutrients.energy_value ? nutrients.energy_value : 'Not available'}
          {nutrients.energy_unit}
        </li>,
        <li key={'carbs'}>
          <span>Carbohydrates:</span>
          {nutrients.carbohydrates_100g ? nutrients.carbohydrates_100g : 'Not available' } g
         </li>,
        <li key={'fats'}>
          <span>Fats:</span>
          {nutrients.fat_100g ? nutrients.fat_100g : 'Not available'  } g
        </li>,
        <li key={'protein'}>
          <span>Protein:</span>
          {nutrients.proteins_100g ? nutrients.proteins_100g : 'Not available'} g
        </li>,
        <li key={'sodium'}>
          <span>Sodium: </span>
          {nutrients.sodium_100g ? Math.ceil(nutrients.sodium_100g) : 'Not available'} g
        </li>
      ]
    }
    if(this.state.spinner && this.state.error === null  ){
      // allInfo = <div className={classes.lds}></div>;
    }else{
      allInfo = (
      <Animated animationIn="bounceInRight"
                animationOut="fadeOut"
                isVisible={true}>
       <div className={classes.Info}>
        <p className = {classes.name}>
          {info.productName ? info.productName : null}
        </p>
        <p>
          {info.quantity ? info.quantity : 'Not available'}
        </p>
        <div className={classes.imgDiv}>
          {info.imageUrl ? <img className={classes.productImg} src={info.imageUrl} alt=""/>
           : <p>{'No  product image available'}</p>}
          {info.imageNutrition ? <img className={classes.productImgNutrition} src={info.imageNutrition} alt=''/>
          : <p>{'No  nutrition image available'}</p>}
        </div>
        <p> Per :{info.NutritionPer ? info.NutritionPer : 'Not available'} </p>
        <ul>
          {displayNut}
        </ul>
        </div>
     </Animated>);
    }

    if(this.state.error){
      error = <h2 className={classes.error}>{this.state.error}
      {this.state.error === 'There was a problem' ? null :<a href="https://world.openfoodfacts.org/">here</a>} </h2>
    }
    if(this.state.values){
      let info = this.state.values;
      intake = <FoodIntake  invalid={this.state.invalidData}
                            serving={info.NutritionPer}
                            product={info.productName}
                            nutrients={this.state.values.nutriments}
                />
    }else{
      intake = <FoodIntake/>
    }

    return(
      // <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div className={classes.CalorieApp}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <h1>How does it work?</h1>
        </Animated>
          <div className={classes.description}>
            <div>
              <p>1. Create an account</p>
              <Animated animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
              <img className={classes.HowTo} src={userLogo} alt='user'/>
              </Animated>
            </div>
            <div>
              <p>2. Input the product barcode</p>
              <Animated animationIn="slideInDown" animationOut="fadeOut" isVisible={true}>
              <img className={classes.HowTo} src={nutrientsImg}  alt='nutrients'/>
              </Animated>
            </div>
            <div>
            <p>3. Get all the information you need</p>
            <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>

              <img className={classes.HowTo} src={caloriesImg}alt='calories'/>
              </Animated>
            </div>
        </div>
          <p class={classes.easy}>It's as EASY as that.</p>
          <ProductForm submit={this.getInputValue}/>
          {error}
          {spinner}
          {this.state.displayed ? allInfo : null}
          {intake}
        </div>
      // </Animated>
    )
  }
}

export default CalorieApp;
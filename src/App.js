import React, { useState, useEffect }  from "react";
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import { useHistory } from "react-router-dom";

import Home from './components/Home'
import FormPage from './components/FormPage'

//////////////// INITIAL STATES ///////////////




const initialPizza = [];

const initialFormValues = {
  name: '',
  /// DROPDOWN ///
  size: '',

  /// RADIO BUTTON ///

  sauce: '',

  //// Checkboxes ///

  toppings:{
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicySausage: false,
    grilledChicken: false,
    onions: false,
    greenPeppers: false,
    dicedTomates: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
  },

  /// TEXT INPUT ///
  instructions: '',

};

const initialErrors = {
  name:'',
  size: '',

  sauce: '',
};

const initialDisabled = true;



const App = () => {



  const history = useHistory();

const routeToFormPage = () => {

  history.push('/pizza')
}

  /// STATES ////

  const [newSavedPizza, setNewSavedPizza] = useState(initialPizza); //object

  const [formValues, setFormValues] = useState(initialFormValues); //object

  const [formErrors, setFormErrors]= useState(initialErrors); //object

  const [disabled, setDisabled]= useState(initialDisabled); //boolean


 
  /////// AXIOS POST /////////

/////// OnChange Function /////////
const change = (event) => {
  const {name, value} = event.target;
  setFormValues({...formValues,[name]: value})
}



 /////// SUBMIT /////////
 const submit = (event) => {
  event.preventDefault();

  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    topping: formValues.toppings,
    intructions: formValues.instructions.trim(),
  };

  setNewSavedPizza([...newSavedPizza, newPizza]);
  setFormValues(initialFormValues)
}


  return (
    
    <div>
        <header>
          <h1>Lambda Eats</h1>
        </header>

          

          <Switch>
            
            <Route path="/pizza">
              <FormPage
              values={formValues}
              change={change}
              submit={submit}
              disabled={disabled}
              errors={formErrors}
              />
            </Route>

            <Route>
              <Home to='/'/>  
            </Route> 

            
          </Switch>
        
        

        {/* <div> */}




          {/* HERO IMAGE */}
          

          {/* Card Boxes of Resturants */}
          {/* <section>
            <div>
              <img src="" alt=""/>
              <h3>McDonald's</h3>
              <p>$ - American - Fast Food - Burgers</p>
              <p> <span>20-30 Min</span> <span>$5-99 Delivery Fee</span> </p>
            </div>

            <div>
              <img src="" alt=""/>
              <h3>McDonald's</h3>
              <p>$ - American - Fast Food - Burgers</p>
              <p> <span>20-30 Min</span> <span>$5-99 Delivery Fee</span> </p>
            </div>

            <div>
              <img src="" alt=""/>
              <h3>McDonald's</h3>
              <p>$ - American - Fast Food - Burgers</p>
              <p> <span>20-30 Min</span> <span>$5-99 Delivery Fee</span> </p>
            </div>
          </section> */}
        {/* </div> */}

    </div>

  );
};

export default App;

import React, { useState, useEffect }  from "react";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import FormPage from './components/FormPage'

//////////////// INITIAL STATES ///////////////

const initialPizza = {};

const initialFormValues = {
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

  ///toggle button ///
  subsititute: '',

  /// TEXT INPUT ///
  instructions: '',

  /// DROPDOWN ///
  orderNumber: '',


};

const initialErrors = {
  size: '',

  sauce: '',
};

const initialDisabled = true;



const App = () => {
  /// STATES ////

  const [newpizza, setNewPizza] = useState(initialPizza); //object

  const [formValues, setFormValues] = useState(initialFormValues); //object

  const [formErrors, setFormErrors]= useState(initialErrors); //object

  const [disabled, setDisabled]= useState(initialDisabled); //boolean


  return (
    
    <div>
        <header>
          <h1>Lambda Eats</h1>
        </header>
        
          <Route path="/">
              <button>Home</button>
            </Route>
              <button>Help</button>
          <Route path="/pizza">
            <FormPage
            values={formValues}
            disabled={disabled}
            errors={formErrors}
            />
          </Route>
        
        

        <div>
          {/* HERO IMAGE */}
          <section>
            <img src="" alt=""/>
            <p>Your favorite food, delivered while coding</p>
              <button>ORDER NOW</button>
          </section>

          {/* Card Boxes of Resturants */}
          <section>
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
          </section>
        </div>

    </div>

  );
};

export default App;

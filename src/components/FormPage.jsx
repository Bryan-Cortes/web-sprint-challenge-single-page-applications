import React from 'react'
import ConfirmationPage from './ConfirmationPage';
import { useHistory } from "react-router-dom";

export default function FormPage({values, disabled, errors, change, submit}) {

  return (
    <div>

      <h2>Build Your Own Pizza</h2>
      <form onSubmit={submit}>

        <label>
          <input
            type='text'
            name="name"
            value={values.name}
            onChange={change}
          />
        </label>
        <label>Choice of Size:
          <select name='size' value={values.size} onChange={change}>
            <option value=''> - Select an option -</option>
            <option value='small'>Small Pizza: 8-10 inches </option>
            <option value='medium'>Medium Pizza: 12 inches  </option>
            <option value='Large'>Large Pizza: 14 inch </option>
            <option value='extraLarge'> Extra-large Pizza: 16-18 inch </option>
          </select>
        </label>

        <h3> Choice of sauce</h3>
        <label>Original Red
          <input
            type='radio'
            name='sauce'
            onChange={change}
            value='original'
            checked={values.sauce === 'original'}
          />
        </label>

        <label>Garlic Ranch
          <input
            type='radio'
            name='sauce'
            onChange={change}
            value='ranch'
            checked={values.sauce === 'ranch'}
          />
        </label>

        <label>BBQ Sauce
          <input
            type='radio'
            name='sauce'
            onChange={change}
            value='bbq'
            checked={values.sauce === 'bbq'}
          />
        </label>

        <label>Spinach Alfredo
          <input
            type='radio'
            name='sauce'
            onChange={change}
            value='alfredo'
            checked={values.sauce === 'alfredo'}
          />
        </label> <br/>

        <label>
          Special Instructions:
          <input
          type='text'
          onChange={change}
          name='instructions'
          value={values.instructions}
          />
        </label>

        

        <h3>Add Toppings</h3>
        <p>Choose up to 10.</p>

        <label>
          Pepperoni
          <input
            type="checkbox"
            onChange={change}
            name="pepperoni"
            checked={values.toppings.pepperoni}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            onChange={change}
            name="sausage"
            checked={values.toppings.sausage}
          />
        </label>

        <label>
        Canadian Bacon
          <input
            type="checkbox"
            onChange={change}
            name="canadianBacon"
            checked={values.toppings.canadianBacon}
          />
        </label>

        <label>
        Spicy Sausage
          <input
            type="checkbox"
            onChange={change}
            name="spicySausage"
            checked={values.toppings.spicySausage}
          />
        </label>

        <label>
        Grilled Chicken
          <input
            type="checkbox"
            onChange={change}
            name="grilledChicken"
            checked={values.toppings.grilledChicken}
          />
        </label>

        <label>
        Onions
          <input
            type="checkbox"
            onChange={change}
            name="onions"
            checked={values.toppings.onions}
          />
        </label>

        <label>
        Green Peppers
          <input
            type="checkbox"
            onChange={change}
            name="greenPeppers"
            checked={values.toppings.greenPeppers}
          />
        </label>

        <label>
        Diced Tomates
          <input
            type="checkbox"
            onChange={change}
            name="dicedTomates"
            checked={values.toppings.dicedTomates}
          />
        </label>

        <label>
        Black Olives
          <input
            type="checkbox"
            onChange={change}
            name="blackOlives"
            checked={values.toppings.blackOlives}
          />
        </label>

        <label>
        Roasted Garlic
          <input
            type="checkbox"
            onChange={change}
            name="roastedGarlic"
            checked={values.toppings.roastedGarlic}
          />
        </label>

        <label>
        Artichoke Hearts
          <input
            type="checkbox"
            name="artichokeHearts"
            checked={values.toppings.artichokeHearts}
          />
        </label>

        <label>
        Three Cheese
          <input
            type="checkbox"
            onChange={change}
            name="threeCheese"
            checked={values.toppings.threeCheese}
          />
        </label>

        <label>
        Pineapple
          <input
            type="checkbox"
            onChange={change}
            name="pineapple"
            checked={values.toppings.pineapple}
          />
        </label>

        <label>
        Extra Cheese
          <input
            type="checkbox"
            onChange={change}
            name="extraCheese"
            checked={values.toppings.extraCheese}
          />
        </label>

        
        <button>Add to Order</button>

      </form>




      <ConfirmationPage/>
    </div>
  )
}

import React from 'react'
import ConfirmationPage from './ConfirmationPage';

export default function FormPage({values, disabled, errors,}) {
  return (
    <div>

      <h2>Build Your Own Pizza</h2>
      <form>
        <label>Choice of Size:
          <select>
            <option> - Select an option -</option>
            <option>Small Pizza: 8-10 inches </option>
            <option>Medium Pizza: 12 inches  </option>
            <option>Large Pizza: 14 inch </option>
            <option>Extra-large Pizza: 16-18 inch </option>
          </select>
        </label>

        <h3> Choice of sauce</h3>
        <label>Original Red
          <input
            type='radio'
            name='sauce'
            value='original'
            checked={values.sauce === 'original'}
          />
        </label>

        <label>Garlic Ranch
          <input
            type='radio'
            name='sauce'
            value='ranch'
            checked={values.sauce === 'ranch'}
          />
        </label>

        <label>BBQ Sauce
          <input
            type='radio'
            name='sauce'
            value='bbq'
            checked={values.sauce === 'bbq'}
          />
        </label>

        <label>Spinach Alfredo
          <input
            type='radio'
            name='sauce'
            value='alfredo'
            checked={values.sauce === 'alfredo'}
          />
        </label>

        <h3>Add Toppings</h3>
        <p>Choose up to 10.</p>

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.toppings.sausage}
          />
        </label>

        <label>
        Canadian Bacon
          <input
            type="checkbox"
            name="canadianBacon"
            checked={values.toppings.canadianBacon}
          />
        </label>

        <label>
        Spicy Sausage
          <input
            type="checkbox"
            name="spicySausage"
            checked={values.toppings.spicySausage}
          />
        </label>

        <label>
        Grilled Chicken
          <input
            type="checkbox"
            name="grilledChicken"
            checked={values.toppings.grilledChicken}
          />
        </label>

        <label>
        Onions
          <input
            type="checkbox"
            name="onions"
            checked={values.toppings.onions}
          />
        </label>

        <label>
        Green Peppers
          <input
            type="checkbox"
            name="greenPeppers"
            checked={values.toppings.greenPeppers}
          />
        </label>

        <label>
        Diced Tomates
          <input
            type="checkbox"
            name="dicedTomates"
            checked={values.toppings.dicedTomates}
          />
        </label>

        <label>
        Black Olives
          <input
            type="checkbox"
            name="blackOlives"
            checked={values.toppings.blackOlives}
          />
        </label>

        <label>
        Roasted Garlic
          <input
            type="checkbox"
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
            name="threeCheese"
            checked={values.toppings.threeCheese}
          />
        </label>

        <label>
        Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.pineapple}
          />
        </label>

        <label>
        Extra Cheese
          <input
            type="checkbox"
            name="pextraCheese"
            checked={values.toppings.extraCheese}
          />
        </label>
        

      </form>




      <ConfirmationPage/>
    </div>
  )
}

import React, { useState } from "react";
import PizzaNav from './components/Nav'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { Route } from 'react-router-dom';

const initialPizzaFormValues = {
  email: '',
  password: '',
  telNum: '',
  size: '',
  extraCheese: false,
  pepperoni: false,
  mushrooms: false,
  onions: false,
  specialRequests: '',
}

const initialOrders = []

const App = () => {

  const [formValues, setFormValues] = useState(initialPizzaFormValues)
  const [orders, setOrders] = useState(initialOrders)

  const changeForm = (name, value) => {
    setFormValues({ ...formValues, [name] : value})
  }

  const submitForm = () => {
    const newOrder = {
      email: formValues.email.trim(),
      password: formValues.password.trim(), 
      telNum: formValues.telNum.trim(),
      size: formValues.size,
      toppings: [ 'extraCheese', 'pepperoni', 'mushrooms', 'onions'].filter(top => formValues[top]),
      specialRequests: formValues.specialRequests.trim(),
    }
    setOrders([ ...orders, newOrder])
    setFormValues(initialPizzaFormValues)
  }

  return (
    <>
      
      <Route path='/'>
        <PizzaNav />
      </Route>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/orderYourPizza'>
        <PizzaForm 
          values={formValues}
          changeForm={changeForm}
          submit={submitForm}
        />
      </Route>
      
      
    </>
  );
};
export default App;

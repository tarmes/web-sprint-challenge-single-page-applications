import React, { useState } from "react";
import PizzaNav from './components/Nav'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { Route } from 'react-router-dom';

const initialPizzaFormValues = {
  telNum: '',
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
      telNum: formValues.telNum.trim(),
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

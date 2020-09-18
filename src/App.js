import React, { useState } from "react";
import PizzaNav from './components/Nav'
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { Route } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'

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

const initialFormErrors = {
  telNum: '',
  email: '',
  password: '',
  size: '',
}

const App = () => {

  const [formValues, setFormValues] = useState(initialPizzaFormValues)
  const [orders, setOrders] = useState(initialOrders)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const changeForm = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name] : value})
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(res => {
        console.log(res)
        setOrders([ ...orders, newOrder])
        setFormValues(initialPizzaFormValues)
      })
      .catch(err => {
        debugger
      })
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
    postNewOrder(newOrder)
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => { // eslint-disable-line
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  }

  return (
    <>
      
      <Route path='/'>
        <PizzaNav />
      </Route>
    
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/orderYourPizza'>
        <PizzaForm 
          values={formValues}
          changeForm={changeForm}
          submit={submitForm}
          errors={formErrors}
        />
      </Route>
      
      
    </>
  );
};
export default App;

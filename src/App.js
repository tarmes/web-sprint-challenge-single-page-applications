import React from "react";
import Home from './components/Home'
import PizzaForm from './components/PizzaForm'
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/orderYourPizza'>
        <PizzaForm />
      </Route>
      
      
    </>
  );
};
export default App;

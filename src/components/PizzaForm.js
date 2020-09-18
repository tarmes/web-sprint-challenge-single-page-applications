import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'reactstrap'

export default function PizzaForm() {
    return (        
        <div className='container'>
            <div className='nav-container'>
                <nav>
                    <NavLink tag={Link} to='/'>Go home!</NavLink>
                </nav>
            </div>
            <div className ='pizzaForm-section'>
                <h2>THIS IS THE PIZZA FORM</h2>
            </div>
    </div>
    )
}
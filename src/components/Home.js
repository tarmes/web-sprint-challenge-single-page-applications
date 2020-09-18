import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'reactstrap'

export default function Home() {
    return (
        <div className='container'>
            <div className='nav-container'>
                <nav>
                    <NavLink tag={Link} to='/orderYourPizza'>Order now!</NavLink>
                </nav>
            </div>
            <div className ='home-section'>
                <h1>THIS IS THE HOME PAGE</h1>
            </div>
        </div>
        
    )
}
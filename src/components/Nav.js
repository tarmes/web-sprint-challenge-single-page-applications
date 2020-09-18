import React from 'react';
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export default function PizzaNav() {

    return (
        <div>
        <Navbar color="dark" dark expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to='/'>Go home!</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to='/orderYourPizza'>Order now!</NavLink>
                </NavItem>
            </Nav>
            <NavbarText>Want a Pizza me?! Come and get it.</NavbarText>
        </Navbar>
        </div>
  );
}

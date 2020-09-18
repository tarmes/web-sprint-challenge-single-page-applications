import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default function PizzaForm(props) {

    const { values, changeForm, submit, errors } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        changeForm(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

  return (
    <Container className='form-container'>
        <h3>Order here :)</h3>
        <Form onSubmit={onSubmit} className='form'>
        <FormGroup>
            <Label for="email">Email</Label>
            <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="enter your e-mail"
                onChange={onChange}
                value={values.email} 
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="enter your password"
                onChange={onChange}
                value={values.password} 
            />
        </FormGroup>
        <FormGroup>
            <Label for="telNum">Phone Number</Label>
            <Input 
                type="text" 
                name="telNum" 
                id="telNum" 
                placeholder="enter your phone number"
                onChange={onChange}
                value={values.telNum} 
            />
        </FormGroup>
        <FormGroup>
            <Label for="size">Select</Label>
            <Input 
                type="select" 
                name="size" 
                id="size"
                onChange={onChange}
                value={values.size}
            >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='Extra Large'>Extra Large</option>
            </Input>
        </FormGroup>
        <FormGroup check className="topping-container">
            <Container className="topping">
                <Label check>
                <Input 
                    type="checkbox"
                    name="extraCheese"
                    checked={values.extraCheese} 
                    onChange={onChange}
                    className="toppings"
                />{' '}
                Extra Cheese
                </Label>
            </Container>
            <Container className="topping">
                <Label check>
                    <Input
                        type="checkbox"
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />{' '} 
                Pepperoni
                </Label>
            </Container>
            <Container className="topping">
                <Label check>
                    <Input
                        type="checkbox"
                        name="mushrooms"
                        checked={values.mushrooms}
                        onChange={onChange}
                    />{' '} 
                Mushrooms
                </Label>
            </Container>
            <Container className="topping">
                <Label check>
                    <Input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                    />{' '} 
                Onions
                </Label>
            </Container>
        </FormGroup>
        <FormGroup className="specReqBox">
            <Label for="specialRequests">Special Requests?</Label>
            <Input 
                type="textarea" 
                name="specialRequests" 
                id="specialRequests" 
                onChange={onChange}
                value={values.specialRequests}
                className="specialRequests"
            />
        </FormGroup>
            <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button className="submitButton">Place your order!</Button>
        <div className='errors'>
                <div>{errors.telNum}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.size}</div>
             </div>
        </Form>
    </Container>
  );
}

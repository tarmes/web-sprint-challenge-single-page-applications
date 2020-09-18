import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default function PizzaForm(props) {

    const { values, changeForm, submit } = props

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
    <Container>
        <Form onSubmit={onSubmit}>
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
        <FormGroup check>
            <Label check>
            <Input 
                type="checkbox"
                name="extraCheese"
                checked={values.extraCheese} 
                onChange={onChange}
            />{' '}
            Extra Cheese
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                />{' '} 
            Pepperoni
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name="mushrooms"
                    checked={values.mushrooms}
                    onChange={onChange}
                />{' '} 
            Mushrooms
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name="onions"
                    checked={values.onions}
                    onChange={onChange}
                />{' '} 
            Onions
            </Label>
        </FormGroup>
        <FormGroup>
            <Label for="specialRequests">Special Requests?</Label>
            <Input 
                type="textarea" 
                name="specialRequests" 
                id="specialRequests" 
                onChange={onChange}
                value={values.specialRequests}
            />
        </FormGroup>
            <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button>Place your order!</Button>
        </Form>
    </Container>
  );
}

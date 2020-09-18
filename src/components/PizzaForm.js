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
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="enter your password" 
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
            <Input type="select" name="size" id="size">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Extra Large</option>
            </Input>
        </FormGroup>
        <FormGroup check>
            <Label check>
            <Input 
                type="checkbox" 
            />{' '}
            Extra Cheese
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name='hiking'
                    // checked={values.hiking}
                    // onChange={onChange}
                />{' '} 
            Pepperoni
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name="reading"
                    // checked={values.reading}
                    // onChange={onChange}
                />{' '} 
            Mushrooms
            </Label>
            <Label check>
                <Input
                    type="checkbox"
                    name="coding"
                    // checked={values.coding}
                    // onChange={onChange}
                />{' '} 
            Onions
            </Label>
        </FormGroup>
        <FormGroup>
            <Label for="specialRequest">Special Requests?</Label>
            <Input type="textarea" name="specialRequest" id="specialRequest" />
        </FormGroup>
            <FormText color="muted">
            Thanks for choosing us! We hope you enjoy your experience and to see you again!
            </FormText>

        <Button>Place your order!</Button>
        </Form>
    </Container>
  );
}

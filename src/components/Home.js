import React from 'react'
import { Container } from 'reactstrap'
import PizzaCarousel from './Carousel'

export default function Home() {
    return (
        <Container className ='home-section'>
            <h1>Lambda Eats</h1>
            <PizzaCarousel />
        </Container>
        
    )
}
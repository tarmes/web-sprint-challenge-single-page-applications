describe('TESTS App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/orderYourPizza')
    })

    const textInput = () => cy.get('.specialRequests')

    it('Test that you can add text to the box', () => {
        textInput()
            .should('have.value', '')
            .type('Does this work?')
            .should('have.value', 'Does this work?')
    })

    it("Can submit a new order", () => {
          cy.get("form").submit()
     })
      
    it("Can check many boxes", () => {
          cy.get('input[type="checkbox"]').first().check()
    })
})



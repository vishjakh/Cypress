class CheckoutPage{

    setFirstname(username){
        cy.get("#first-name").type(username)
    }

    setLastname(lastname){
        cy.get("#last-name").type(lastname)
    }

    setZipCode(code){
        cy.get("#postal-code").type(code)
    }

    clickContinue(){
        cy.get("#continue").click()
    }


}

export default CheckoutPage
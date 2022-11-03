class LoginPage{
    navigate(){
        cy.visit("https://www.saucedemo.com")
    }

    enterUsername(userName){
        cy.get("#user-name").type(userName)

    }

    enterPassword(password){
        cy.get("#password").type(password)
    }

    clickLogin(){
        cy.get("#login-button").click()
    }

    getLoginButton(){
        return cy.get("#login-button")
    }

    getErrorText(){
        return cy.get("h3")
    }
}

export default LoginPage
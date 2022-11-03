class UserPage {


    getUserPageHeading() {
        return cy.get(".title")
    }

    addBagToCart() {
        cy.get("#add-to-cart-sauce-labs-backpack").click()
    }

    bagPrice() {

        return cy.xpath("//div[contains(text(),'Backpack')]/ancestor::div[@class='inventory_item'] //div[@class='inventory_item_price']").invoke('text')

    }

    addTShirtToCart() {
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    }

    tshirtPrice() {

        return cy.xpath("//div[contains(text(),'T-Shirt')]/ancestor::div[@class='inventory_item'] //div[@class='inventory_item_price']").invoke('text')






    }
    navigateToCart() {



        cy.get(".shopping_cart_link").click()
    }

    burgerMenuClick() {
        cy.get("#react-burger-menu-btn").click();
    }

    logoutClick() {
        cy.get("#logout_sidebar_link").click()
    }

}

export default UserPage
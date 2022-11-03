class CartPage{

    clickCheckout(){
        cy.get('[data-test="checkout"]').click()
    }

    getProductName(){
        return cy.get('.cart_item .inventory_item_name')
    }
}

export default CartPage
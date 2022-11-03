
import LoginPage from "./pages/LoginPage"
import UserPage from "./pages/UserPage"
import CartPage from './pages/CartPage'
import CheckoutPage from "./pages/checkoutPage"
import CheckoutPage2 from "./pages/CheckoutPage2"
import CheckoutComplete from "./pages/CheckoutComplete.js"

describe("Problem user actions", () => {

    const login = new LoginPage()
    const userPage = new UserPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()
    const checkoutPage2 = new CheckoutPage2()
    const checkoutComplete = new CheckoutComplete()
    const userName="problem_user"
    const password = "secret_sauce"

    beforeEach('navigate', () => {
        login.navigate()
        login.enterUsername(userName)
        login.enterPassword(password)
        login.clickLogin()
    })

    it('Login', () => {
        userPage.getUserPageHeading().contains('Products')
    });

    it('Add backpack to cart', () => {
        userPage.addBagToCart()
        userPage.navigateToCart()
        cartPage.getProductName().contains("Backpack")
    });

    it('Cart Total', async () => {
        userPage.addBagToCart()
        userPage.addTShirtToCart()
        let tshirtPrice = userPage.tshirtPrice()
        let bagPrice = userPage.bagPrice()
        let tax = 3.68;
        userPage.navigateToCart()
        cartPage.clickCheckout()
        checkoutPage.setFirstname("test")
        checkoutPage.setLastname("Case")
        checkoutPage.setZipCode("789456")
        checkoutPage.clickContinue()
        let checkoutTotal = checkoutPage2.getTotalAmount()
        let sum;
        tshirtPrice.then((ts)=>{
            bagPrice.then((bp)=>{
                sum=parseFloat(ts.substr(1))+parseFloat(bp.substr(1))+tax
            checkoutTotal.then((check)=>{
                assert.equal(check,sum,"Successfully Passed")
            })
            })
        })
    })

    it('Checkout Flow',  () => {
        userPage.addBagToCart()
        userPage.navigateToCart()
        cartPage.clickCheckout()
        checkoutPage.setFirstname("test")
        checkoutPage.setLastname("Case")
        checkoutPage.setZipCode("789456")
        checkoutPage.clickContinue()
        checkoutPage2.finalizePurchase()
        checkoutComplete.thanksText().contains("THANK YOU")

        
    });

    it('Logout Flow', () => {
        userPage.burgerMenuClick()
        userPage.logoutClick()
        login.getLoginButton().should("be.visible")
    });

})
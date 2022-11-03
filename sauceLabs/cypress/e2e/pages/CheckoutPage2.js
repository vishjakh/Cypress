class CheckoutPage2{

    finalizePurchase(){
        cy.get("#finish").click()
    }

    getTotalAmount(){
        const prom = new Promise((resolve)=>{
            cy.get(".summary_total_label").invoke('text')
            .then((text)=>{
                resolve(parseFloat(text.substr(8)))
            })
        })
        return prom;
        
        
    }


}
export default CheckoutPage2
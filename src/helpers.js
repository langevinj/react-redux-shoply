//calculates tax, defaults to california tax amount
function taxAmount(preTax, tax = 0.0725) {
    return (preTax * tax)
}

/** calculates the preTax sum, and post tax sum, returns
 *          { total: postTaxTotal, tax: tax, preTax: pretax}*/
export function calculateTotal(cart, discountCode = ""){
    if (!cart) { return 0 }
    const prices = Object.entries(cart).map(item => item[1].price * item[1].qty)
    if (!prices.length > 0) { return 0 }

    const reducer = (acc, currVal) => acc + currVal;
    let cartTotal = prices.reduce(reducer)

    let preTax;
    
    //factor in the customer's discount code if any
    if (discountCode === "REMOVE10") {
        preTax = (cartTotal * 0.90)
    } else if (discountCode === "REMOVE20") {
        preTax = (cartTotal * 0.80)
    } else if (discountCode === "REMOVE30") {
        preTax = (cartTotal * 0.70)
    } else {
        preTax = cartTotal
    }
    
    let tax = taxAmount(preTax)
    return {total: (preTax + tax).toFixed(2), tax: tax.toFixed(2), preTax: preTax.toFixed(2)}
}

//counts up the total number of items in the cart
export function totalItems(cart) {
    let count = 0;
    if(!cart){
        return 0
    }
    Object.entries(cart).forEach(item => count += item[1].qty)
    return count
}
export function calculateTotal(cart, discountCode = ""){
    const prices = Object.entries(cart).map(item => item[1].price * item[1].qty)
    if (!prices.length > 0) {
        return 0
    }
    const reducer = (acc, currVal) => acc + currVal;
    let cartTotal = prices.reduce(reducer)
    if (discountCode === "REMOVE10") {
        return (cartTotal * 0.90).toFixed(2)
    } else if (discountCode === "REMOVE20") {
        return (cartTotal * 0.80).toFixed(2)
    } else if (discountCode === "REMOVE30") {
        return (cartTotal * 0.70).toFixed(2)
    } else {
        return cartTotal.toFixed(2)
    }
}

export function totalItems(cart) {
    let count = 0;
    Object.entries(cart).forEach(item => count += item[1].qty)
    return count
}
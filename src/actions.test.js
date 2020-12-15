import { addToCart, removeFromCart } from './actions'

const TEST_ID = "1"

it("should return the correct object when addToCart is called", function() {
    const res = addToCart(TEST_ID)
    expect(res).toEqual({ type: "ADD", payload: TEST_ID})
});

it("should return the correct object when removeFromCart is called", function() {
    const res = removeFromCart(TEST_ID)
    expect(res).toEqual({ type: "REMOVE", payload: TEST_ID})
});
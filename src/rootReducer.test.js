import rootReducer from './rootReducer'
import { createStore } from "redux"

let store;

//before each test create a new test store
beforeEach(() => {
    store = createStore(rootReducer)
})

it("should return the correct initial values", function() {
    expect(store.getState().cart).toEqual({})
    expect(store.getState().inventory).toEqual(expect.any(Object))
});

it("should return the correct cart when an item is added", function() {
    let action = { type: 'ADD', payload: "47314fa1-ae56-4eae-80be-af6691145951" }
    store.dispatch(action);
    expect(Object.keys(store.getState().cart)).toHaveLength(1)
    expect(store.getState().inventory).toEqual(expect.any(Object))
});

it("should remove an item from the cart when removed", function() {
    //first add the item to the cart
    let action = { type: 'ADD', payload: "47314fa1-ae56-4eae-80be-af6691145951" }
    store.dispatch(action);
    expect(Object.keys(store.getState().cart)).toHaveLength(1)

    //now we test the removal
    let action2 = { type: 'REMOVE', payload: "47314fa1-ae56-4eae-80be-af6691145951" }
    store.dispatch(action2)
    expect(Object.keys(store.getState().cart)).toHaveLength(0)
});
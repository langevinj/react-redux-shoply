import { render } from '@testing-library/react';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'

let store;

beforeEach(() => {
    store = createStore(rootReducer);
})

it("renders without crashing", function () {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        </Provider>)
})

it("matches the snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}>
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        </Provider>)

    expect(asFragment).toMatchSnapshot();
})
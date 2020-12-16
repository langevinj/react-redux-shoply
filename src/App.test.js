import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider }  from 'react-redux'
import rootReducer from './rootReducer'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let store;

beforeEach(() => {
  store = createStore(rootReducer);
})

it("renders without crashing", function() {
  render(
    <Provider store={store}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
    </Provider>)
})

it("matches the snapshot", function() {
  const { asFragment } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>)

    expect(asFragment).toMatchSnapshot();
})

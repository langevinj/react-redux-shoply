import './App.css';
import Routes from './Routes'
import Nav from './Nav'
import useLocalStorage from './hooks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateInitialCart } from './actions'

function App() {
  const [storedCart, setStoredCart] = useLocalStorage("cart")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateInitialCart(storedCart))
  }, [])
  
  // let msg = storedCart === [] ? JSON.parse(storedCart) : null
  console.log(storedCart)
  return (
    <div className="App">
      <Nav />
      <Routes />
   </div>
 );
}

export default App;

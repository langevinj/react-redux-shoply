import useLocalStorage from './hooks'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateInitialCart } from './actions'
import Routes from './Routes'
import Nav from './Nav'
import './App.css';

function App() {
  const [storedCart] = useLocalStorage("cart")
  const dispatch = useDispatch();

  //on rendering, use the locally stored cart to set the store
  useEffect(() => {
    dispatch(updateInitialCart(storedCart))
  }, [])
  
  return (
    <div className="App">
      <Nav />
      <Routes />
   </div>
 );
}

export default App;

import './App.css';
import Routes from './Routes'
import Nav from './Nav'
import useLocalStorage from './hooks'

function App() {
  const [storedCart, setStoredCart] = useLocalStorage("cart")
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

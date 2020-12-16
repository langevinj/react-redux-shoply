import React from 'react' 
import { Route } from 'react-router-dom'
import Products from './Products'
import Details from './Details'
import Cart from './Cart'

function Routes() {
    return (
        <div className="row align-items-center">
          <div className="col">
          <Route exact path="/products/:id"><Details /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/"><Products /></Route>
          </div>
        </div>
    )
}

export default Routes;
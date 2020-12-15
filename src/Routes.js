import React from 'react' 
import { Route } from 'react-router-dom'
import Products from './Products'
import Details from './Details'
import Cart from './Cart'

function Routes() {
    return (
        <>
          <Route exact path="/products/:id"><Details /></Route>
          <Route exact path="/cart"><Cart /></Route>
          <Route exact path="/"><Products /></Route>
        </>
    )
}

export default Routes;
import React from 'react' 
import { Route } from 'react-router-dom'
import Products from './Products'
import Details from './Details'

function Routes() {
    return (
        <>
          <Route exact path="/products/:id"><Details /></Route>
          <Route exact path="/"><Products /></Route>
        </>
    )
}

export default Routes;
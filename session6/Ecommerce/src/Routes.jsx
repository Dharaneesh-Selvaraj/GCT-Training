import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './Product'
import Example from './Home'
import Navbar from './Navbar'
import AllComponets from './AllComponets'

export default function WebRoutes() {
  return (
    <BrowserRouter>  
        <Routes>
          <Route path='buyer' element={<AllComponets />}>
            {/* OUTLET */}
            <Route index element={<Example />}></Route>
            <Route path='pro' element={<Product />}></Route>
          </Route>    
        </Routes>
    </BrowserRouter>
  )
}

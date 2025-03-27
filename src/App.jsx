import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import Cart from './Pages/Cart'
import About from './Pages/About'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './Pages/Orders'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collections' element={<Collections/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product/productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/place-order' element={<PlaceOrder/>} />
          <Route path='/orders' element={<Orders/>} />
        </Routes>
    </div>
  )
}

export default App
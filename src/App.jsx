import React from 'react'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/Placeorder/PlaceOrder'



const App = () => {

 
return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element= { <Home/> } />
        <Route path='/cart' element= { <Cart/> } />
        <Route path='/order' element= { <PlaceOrder/> } />
        
      </Routes>
      
    </div>
  )
}

export default App

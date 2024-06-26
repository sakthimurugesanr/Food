import  { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextprovider = (props) => {

    const [cartItem,setCartItem]=useState({})

    const addTocart = (itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
 const removeCartItem =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }
    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])


    const contextvalue={
        food_list,
        cartItem,
        setCartItem,
        addTocart,
        removeCartItem
    }
  return (
    
      <StoreContext.Provider value={contextvalue}>
        {props.children}
      </StoreContext.Provider>
    
  )
}

export default StoreContextprovider;

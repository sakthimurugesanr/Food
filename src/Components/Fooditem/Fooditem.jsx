import { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({id,name,price,description,image}) => {
    const {cartItem,addTocart,removeCartItem}=useContext(StoreContext);



  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt=""/>
            {!cartItem[id]
            ? <img  className="add"src={assets.add_icon_white} onClick={()=>addTocart(id)} alt="" />
            : <div className='food-item-counter'>
               <img src={assets.add_icon_green} onClick={()=>addTocart(id)} alt="" />
                    <p>{cartItem[id]}</p>
                <img src={assets.remove_icon_red} onClick={()=>removeCartItem(id)} alt="" />
            </div>
        }
        </div>
        
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
                
            </div>
            <div className="food-item-desc">
                <p>{description}</p>
                
            </div>
            <p className='price'>${price}</p>
        </div>

      
    </div>
  )
}

export default Fooditem

import  { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    {console.log(category,item.category);}
                    if(category==="All" || category===item.category){
                        return <Fooditem key={index} price={item.price} description={item.description} name={item.name} id={item._id} image={item.image}/>

                    }
                
                    
                    
                })
            }

        </div>
      
    </div>
  )
}

export default FoodDisplay

import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad accusantium earum tenetur dicta non praesentium odit eveniet ipsum porro illo veniam, ipsam officia? Deserunt dicta molestias debitis laborum dolor!</p>
        <div className="explore-menu-list">
            
                {menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />

    </div>
  )
}

export default Exploremenu

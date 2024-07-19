import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo,setResInfo] = useState(null);
  const {resId} = useParams();
  // console.log(resId)

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6529458&lng=77.30228679999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json?.data)
    }
    if(resInfo === null){
      return <Shimmer/>
    }
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6529458&lng=77.30228679999999&restaurantId=140505&catalog_qa=undefined&submitAction=ENTER

    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    console.log(itemCards);

  return(
    <div className='menu'>
       <h2>{name}</h2>
       <h3>{avgRating}</h3>
       <h3>{costForTwoMessage}</h3>
       <h3>{cuisines.join(", ")}</h3>

       <h2>Menu</h2>
       <ul>
       {itemCards.map(item=>{
          return <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice / 100  || item.card.info.price / 100}</li> 
        })
      }
       </ul>
    </div>
  )
}

export default RestaurantMenu;
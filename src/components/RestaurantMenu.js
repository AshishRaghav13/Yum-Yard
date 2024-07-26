import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const {resId} = useParams();
  // console.log(resId)
   
    const resInfo = useRestaurantMenu(resId);    // CustomHook

    if(resInfo === null){
      return <Shimmer/>
    }
    
    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((categ) =>
      categ?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log(categories)
   

  return(
    <div className='text-center p-8 shadow-2xl rounded-xl'>
       <h2 className='font-bold'>{name}</h2>
       <h3>{avgRating} stars</h3>
       <h3>{costForTwoMessage}</h3>
       <h3>{cuisines.join(", ")}</h3>
       <h3 className='font-semibold m-4'>- - - -  Menu  - - - -</h3>
       <ul>
        {categories.map((title,index)=>
         <RestaurantCategory data={title.card.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
        )}
       </ul>
      </div>
  )
}

export default RestaurantMenu;
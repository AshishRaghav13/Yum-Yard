import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const {resId} = useParams();
  // console.log(resId)
   
    const resInfo = useRestaurantMenu(resId);    // CustomHook

    if(resInfo === null){
      return <Shimmer/>
    }
    
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
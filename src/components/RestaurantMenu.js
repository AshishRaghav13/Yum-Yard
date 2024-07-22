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
    <div className='mx-[33%] bg-slate-100 p-8 mt-20 shadow-2xl'>
       <h2 className='font-bold'>{name}</h2>
       <h3>{avgRating} stars</h3>
       <h3>{costForTwoMessage}</h3>
       <h3>{cuisines.join(", ")}</h3>
       <div className=''>
       <h2 className='font-bold'>Menu</h2>
       <ul className='list-decimal'>
       {itemCards.map(item=>{
          return <li className="py-1" key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice / 100  || item.card.info.price / 100}</li> 
        })
      }
       </ul>
       </div>
    </div>
  )
}

export default RestaurantMenu;
import Carousel from "./Carousel";
import Restaurantcard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [carouselList,setCarouselList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json)
    setListOfRestaurants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCarouselList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if(listOfRestaurants.length ===0 && carouselList.length ===0){
   return <Shimmer/>
  }
    return(
        <div className="body">
            <div className="carousel-container">
                {
                    carouselList.map((items)=><Carousel key={items.id} imgData={items}/>)
                }
            </div>
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >= 4.4);
                setListOfRestaurants(filteredList);
              }} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>
                    <Restaurantcard key={restaurant.info.id} resData={restaurant} />
                )}
                {/* <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" />
                <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" /> */}
            </div>

        </div>
    )
}

export default Body;


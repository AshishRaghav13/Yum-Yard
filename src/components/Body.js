import Carousel from "./Carousel";
import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  const [searchtext, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setListOfRestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCarouselList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if(status === false){
    return <h1>Looks like you are Offline!! Please Check your internet connection</h1>
  }
  // Conditional Rendering
  if (listOfRestaurants.length === 0 && carouselList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="carousel-container">
        {carouselList.map((items) => (
          <Carousel key={items.id} imgData={items} />
        ))}
      </div>
      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" value={searchtext} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}><Restaurantcard resData={restaurant} /></Link>
        ))}
        {/* <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" />
                <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" /> */}
      </div>
    </div>
  );
};

export default Body;

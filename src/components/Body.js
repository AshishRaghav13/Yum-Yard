import Carousel from "./Carousel";
import Restaurantcard, { isOpen } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import '../App.css';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [carouselList, setCarouselList] = useState([]);
  const [searchtext, setSearchText] = useState("");

  // console.log(listOfRestaurants)

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const status = useOnlineStatus();

  const RestaurantOpen = isOpen(Restaurantcard);

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
    setFilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarouselList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  const {loggedInUser,setUserName} = useContext(UserContext);
  
  if (status === false) {
    return (
      <h1>
        Looks like you are Offline!! Please Check your internet connection
      </h1>
    );
  }

  // Conditional Rendering
  if (listOfRestaurants.length === 0 && carouselList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        {carouselList.map((items) => (
          <Carousel key={items.id} imgData={items} />
        ))}
      </div>
      <div className="flex m-4 p-4  ">
        <div className="search">
          <input
            className="border bottom-solid border-black p-1 rounded-md"
            type="text"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border border-black px-3 cursor-pointer py-1 m-3 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button className="border border-black p-1 rounded-md m-3"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-3">
          <label>UserName : </label>
          <input className="border border-black p-1 rounded-md" type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>

      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {
              restaurant.info.isOpen ? (<RestaurantOpen delievry={restaurant.info.sla.deliveryTime} resData={restaurant}/>) :(<Restaurantcard resData={restaurant} />)
            }
          </Link>
        ))}
        {/* <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" />
                <Restaurantcard resName="KFC" cuisine="Veg Crispy Burgers" /> */}
      </div>
    </div>
  );
};

export default Body;

import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({resData})=>{
    // const {resData} = props;
    // console.log(props)
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="burger img" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default Restaurantcard;
                      
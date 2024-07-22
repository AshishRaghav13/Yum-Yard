import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({resData})=>{
    // const {resData} = props;
    // console.log(props)
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="w-48 shadow-md m-8 p-2 border border-s-violet-100">
            <img className="rounded-lg " src={CDN_URL+cloudinaryImageId} alt="burger img" />
            <h3 className="font-semibold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default Restaurantcard;
                      
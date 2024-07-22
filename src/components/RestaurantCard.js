import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({resData})=>{
    // const {resData} = props;
    // console.log(props)
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData?.info;
    return(
        <div className="w-60 m-6 p-3 rounded-lg hover:shadow-xl hover:bg-gray-50 ">
            <img className="rounded-lg " src={CDN_URL+cloudinaryImageId} alt="burger img" />
            <h3 className="font-semibold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}⭐</h4>
        </div>
    )
}

export const isOpen = (Restaurantcard)=>{
    return (props)=>{
        return(
            
            <div>
            <label className="bg-green-400 text-black absolute px-2 rounded-md mx-9 my-1">{props.delievry} mins</label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}

export default Restaurantcard;
                      
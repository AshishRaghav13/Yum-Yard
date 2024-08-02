import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const data = useContext(UserContext);    // used to avoid prop drilling

    const [btnNameReact,setBtnNameReact] = useState("Login");
    const status = useOnlineStatus();

    // subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items)
  
    return(
        <div className="flex justify-between shadow-md shadow-gray-300 m-2">
            <div className="m-4">
                <img className="logo" width='150' src="https://thumbs.dreamstime.com/b/fresh-food-delivery-van-cartoon-representing-funny-green-driven-friendly-man-cheering-vegetables-fruit-93400662.jpg" alt="foodLogo" />
            </div>
            <div className="">
                 <ul className="flex space-x-6 m-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li className="font-semibold"><Link to="/cart">🛒({cartItems.length})</Link></li>
                    <li>Online Status :{status?"✅":"❌"}</li>
                    <li><Link to={"/grocery"}>Grocery</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="font-semibold">{data.loggedInUser}</li>
                 </ul>
            </div>
        </div>
    )
}

export default Header;
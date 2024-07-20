import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const status = useOnlineStatus();
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo" width='150' src="https://thumbs.dreamstime.com/b/fresh-food-delivery-van-cartoon-representing-funny-green-driven-friendly-man-cheering-vegetables-fruit-93400662.jpg" alt="foodLogo" />
            </div>
            <div className="nav-items">
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>Online Status :{status?"✅":"❌"}</li>
                    <button className="login" onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                 </ul>
            </div>
        </div>
    )
}

export default Header;
const Header = ()=>{
    return(
        <div className = "header">
            <div className="logo-container">
                <img className="logo" width='150' src="https://thumbs.dreamstime.com/b/fresh-food-delivery-van-cartoon-representing-funny-green-driven-friendly-man-cheering-vegetables-fruit-93400662.jpg" alt="foodLogo" />
            </div>
            <div className="nav-items">
                 <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                 </ul>
            </div>
        </div>
    )
}

export default Header;
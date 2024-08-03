import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=> store.cart.items)
    return(
       <div className="text-center mt-8 w-6/12 m-auto shadow-lg rounded-md p-1">
        <h1 className="font-bold p-4 text-lg">Cart({cartItems.length})</h1>
        {cartItems.length === 0 ? <h2>Cart is Empty. Add items to the cart!</h2>:<button className="m-1 p-2 bg-slate-100 rounded-lg" onClick={handleClearCart}>Clear Cart</button>}
        <ItemList items={cartItems}/>
       </div>
    )
}

export default Cart;
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 text-center bg-black text-white rounded-md shadow-sm"
          onClick={() => {
            handleClearCart();
          }}
        >
          Clear cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty</h1>}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};

export default Cart;

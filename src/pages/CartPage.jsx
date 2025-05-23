import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../store/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button className="checkout-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;

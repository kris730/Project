import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

function Checkout() {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    dispatch(clearCart());
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Confirm your order and complete the purchase.</p>
      <button className="checkout-btn" onClick={handleCheckout}>
        Complete Purchase
      </button>
    </div>
  );
}

export default Checkout;

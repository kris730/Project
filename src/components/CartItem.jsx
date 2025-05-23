


// import { useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../store/cartSlice";

// function CartItem({ item }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="cart-item">
//       <h3>{item.name}</h3>
//       <p>Price: ${item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//       <div className="cart-buttons">
//         <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
//           ➕
//         </button>
//         <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
//           ➖
//         </button>
//         <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
//           ❌ Remove
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartItem;

import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} /> {/* ✅ Image */}
      <div className="cart-item-info">
        <h3>{item.title}</h3> {/* ✅ Product Name */}
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Quantity:</strong> {item.quantity}</p>
      </div>
      <div className="cart-buttons">
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
          ➕
        </button>
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
          ➖
        </button>
        <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
          ❌ Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;

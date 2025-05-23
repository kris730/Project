// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/cartSlice";

// function ProductItem({ product }) {
//   const dispatch = useDispatch();
  
//   return (
//     <div className="product-item">
//       <h3>{product.id}</h3>
//       <h3>{product.name}</h3>
//       <p>Price: {product.price}</p>
//       <button className="add-cart-btn" onClick={() => dispatch(addToCart(product))}>
//         Add to Cart
//       </button>

      
//     </div>
//   );
// }

// export default ProductItem;


// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/cartSlice";

// function ProductItem({ product }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="product-item">
//       <img 
//         src={product.image} 
//         alt={product.name} 
//         className="product-image" 
//         style={{ maxWidth: "150px", borderRadius: "8px" }} 
//       />
//       <h3>{product.name}</h3>
//       <p><strong>ID:</strong> {product.id}</p>
//       <p><strong>Price:</strong> ${product.price}</p>
//       <p><strong>Description:</strong> {product.description}</p>
//       <button 
//         className="add-cart-btn" 
//         onClick={() => dispatch(addToCart(product))}
//       >
//         🛒 Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductItem;

import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.title} added to cart!`); // Confirmation message
  };

  return (
    <div className="product-item">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="product-image" 
        style={{ maxWidth: "150px", borderRadius: "8px" }} 
      />
      <h3>{product.title}</h3> {/* Updated field */}
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}</p>
      <button 
        className="add-cart-btn" 
        onClick={handleAddToCart}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;


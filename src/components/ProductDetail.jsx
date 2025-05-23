// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const result = await response.json();
//         setProduct(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (loading) return <p>Loading product details...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return product ? (
//     <div className="product-detail">
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//     </div>
//   ) : (
//     <p>No product found.</p>
//   );
// }

// export default ProductDetail;

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         if (!response.ok) throw new Error("Failed to fetch product details");
//         const result = await response.json();
//         setProduct(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (loading) return <div className="loading">🔄 Loading product details...</div>;
//   if (error) return <div className="error">❌ Error: {error}</div>;

//   return product ? (
//     <div className="product-detail">
//       <h2>{product.title}</h2>
//       <img src={product.thumbnail} alt={product.title} style={{ maxWidth: "200px" }} />
//       <p>{product.description}</p>
//       <p><strong>Price:</strong> ${product.price}</p>
//       <p><strong>Brand:</strong> {product.brand}</p>
//       <p><strong>Category:</strong> {product.category}</p>
//     </div>
//   )  : (
//           <div> No Product Found </div>
//         )
  

// }
// export default ProductDetail;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");

        const result = await response.json();
        if (!result || Object.keys(result).length === 0) throw new Error("Product not found");

        setProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <div className="loading">🔄 Loading product details...</div>;
  if (error) return <div className="error">❌ {error}</div>;

  return product ? (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ maxWidth: "200px" }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  ) : null;  // No fallback message, returns nothing
}

export default ProductDetail;


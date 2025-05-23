// import { useState } from "react";
// import useFetchProducts from "../hooks/useFetchProducts";
// import ProductItem from "./ProductItem";
// import SearchBar from "./SearchBar";

// function ProductList() {
//   const { data: products, loading, error } = useFetchProducts('https://dummyjson.com/products');
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const handleSearch = (query) => {
//     const results = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
//     setFilteredProducts(results);
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error fetching products: {error}</p>;

//   return (
//     <div className="product-list-container">
//       <SearchBar onSearch={handleSearch} />
//       <div className="product-grid">
//         {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

// import { useState, useEffect } from "react";
// import useFetchProducts from "../hooks/useFetchProducts";
// import ProductItem from "./ProductItem";
// import SearchBar from "./SearchBar";

// function ProductList() {
//   const { data: products, loading, error } = useFetchProducts("https://dummyjson.com/products");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     if (products) {
//       setFilteredProducts(products);
//     }
//   }, [products]);

//   const handleSearch = ({ query, searchBy }) => {
//     if (!products) return;

//     let results = products.filter((p) =>
//       searchBy === "id" ? p.id.toString() === query : p.title.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredProducts(results);
//   };

//   if (loading) return <div className="loading">🔄 Loading products...</div>;
//   if (error) return <div className="error">❌ Error fetching products: {error}</div>;

//   return (
//     <div className="product-list-container">
//       <SearchBar onSearch={handleSearch} />
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
//         ) : (
//           <div> </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;


// import { useState, useEffect } from "react";
// import useFetchProducts from "../hooks/useFetchProducts";
// import ProductItem from "./ProductItem";
// import SearchBar from "./SearchBar";

// function ProductList() {
//   const { data: products, loading, error } = useFetchProducts("https://dummyjson.com/products");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Ensure filteredProducts starts with full list when products are available
//   useEffect(() => {
//     if (products && products.length > 0) {
//       setFilteredProducts(products);
//     }
//   }, [products]);

//   const handleSearch = ({ query, searchBy }) => {
//     if (!products) return;

//     const results = products.filter((p) =>
//       searchBy === "id"
//         ? p.id.toString() === query
//         : p.title.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
//     );

//     setFilteredProducts(results);
//   };

//   if (loading) return <div className="loading">🔄 Loading products...</div>;
//   if (error) return <div className="error">❌ Error fetching products: {error}</div>;

//   return (
//     <div className="product-list-container">
//       <SearchBar onSearch={handleSearch} />
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
//         ) : (
//           <div className="not-found">⚠️ No products match your search.</div> // Meaningful fallback message
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductList;
import { useState, useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

function ProductList() {
  const { data: products, loading, error } = useFetchProducts("https://dummyjson.com/products");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Ensure filteredProducts starts with full product list when available
  useEffect(() => {
    if (products && products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = ({ query, searchBy }) => {
    if (!products) return;

    // Ensure valid query input
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setFilteredProducts(products);
      return;
    }

    // Perform search based on selected criteria
    const results = products.filter((p) =>
      searchBy === "id"
        ? p.id.toString() === trimmedQuery // Ensure exact ID match
        : p.title.toLowerCase().includes(trimmedQuery.toLowerCase()) // Case-insensitive name search
    );

    setFilteredProducts(results);
  };

  if (loading) return <div className="loading">🔄 Loading products...</div>;
  if (error) return <div className="error">❌ Error fetching products: {error}</div>;

  return (
    <div className="product-list-container">
      <SearchBar onSearch={handleSearch} />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <div className="not-found"></div>
        )}
      </div>
    </div>
  );
}

export default ProductList;

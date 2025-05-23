import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to ShoppyGlobe 🛍️</h1>
      <p>Discover amazing products at the best prices!</p>
      <Link to="/products">
        <button className="explore-btn">Explore Products</button>
      </Link>
    </div>
  );
}

export default Home;

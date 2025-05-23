// import { useState } from "react";

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// }

// export default SearchBar;

// import { useState } from "react";

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value); // Trim spaces to avoid unwanted issues
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="number" // Ensuring only numeric input for product ID
//         placeholder="Search by Product ID..."
//         value={query}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// }

// export default SearchBar;

// import { useState } from "react";

// function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//   setQuery(e.target.value);
//   onSearch(e.target.value); // Pass query + search type
// };

//   return (
//     <div className="search-bar">
//       <input
//         type="number" // Ensuring only numeric input for product ID
//         placeholder="Search by Product ID..."
//         value={query}
//        onChange={handleSearch}
//       />
//     </div>
//   );
// }

// export default SearchBar;

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchBy, setSearchBy] = useState("id"); // Default search type

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch({ query: e.target.value, searchBy });
  };

  const handleSearchTypeChange = (e) => {
    setSearchBy(e.target.value);
  };

  return (
    <div className="search-bar">
      <select onChange={handleSearchTypeChange}>
        <option value="id">Search by ID</option>
        <option value="title">Search by Title</option>
      </select>
      <input
        type="text"
        placeholder={`Search by ${searchBy}...`}
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      navigate(`/search-results/${searchTerm}`);
    } else {
      alert("Please enter a valid search term.");
    }
  };

  return (
    <div className="h-96 w-72 ml-36 mt-8 shadow-xl rounded-md absolute">
      <form onSubmit={handleSearch}>
        <input
          className="border outline-none p-3 rounded-full ml-6 mt-3 w-60 shadow-md"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className=" absolute p-3 shadow-md rounded-full mt-3 mr-6  right-0"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default Categories;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
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
    <form onSubmit={handleSearch} className="flex pt-10 pr-36 pb-10 pl-36">
      <input
        className="border-2 outline-none py-2 px-3 mr-2 rounded-l-lg w-full transition-colors duration-300 hover:shadow-md"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className=" bg-sky-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 hover:shadow-md"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchInput;

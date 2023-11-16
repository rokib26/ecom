import { useEffect, useState } from "react";
import { useData } from "../../contexApi/FatchData";
import { useParams, Link, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import NaveBar from "./NaveBar";

const SearchResultPage = () => {
  const navigate = useNavigate();
  const { Api1, Api2 } = useData();
  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const combinedApi = [
      ...Api1.map((item) => ({ ...item, key: `api1-${item.id}` })),
      ...Api2.map((item) => ({ ...item, key: `api2-${item.id}` })),
    ];

    const filteredResult = combinedApi.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(filteredResult);
  }, [searchTerm, Api1, Api2]);

  return (
    <>
      <NaveBar />
      <div className=" mt-20">
        <SearchInput />
      </div>

      <div className="bg-blue-500 text-white px-4 py-2 w-36 cursor-pointer rounded-full hover:bg-blue-600 m-auto  text-center">
        <Link to="/"> Back</Link>
      </div>

      <div className=" mt-11 grid grid-cols-3 pt-0 pr-36 pb-0 pl-36 gap-6">
        {searchResult.map((item) => (
          <div
            key={item.key}
            className=" p-4 transform transition-transform hover:scale-105 hover:shadow-lg rounded-lg bg-slate-50"
          >
            <div className="relative">
              <img
                src={item.imageUrl || "/path/to/placeholder-image.jpg"}
                alt={item.title}
                className="w-40 h-40  rounded-lg mx-auto"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p className="text-gray-600 mt-2">${item.price}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button
                className=" border shadow-md px-4 py-2 cursor-pointer rounded-full"
                onClick={() => navigate(`/product/${item.key}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResultPage;

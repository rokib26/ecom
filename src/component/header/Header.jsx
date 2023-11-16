import { useNavigate } from "react-router-dom";
import { useData } from "../../contexApi/FatchData";
import Slider from "./Slider";

const Header = () => {
  
  const navigate = useNavigate();
  const { Api1, Api2 } = useData();

  const combinedApi = [
    ...Api1.map((item) => ({ ...item, key: `api1-${item.id}` })),
    ...Api2.map((item) => ({ ...item, key: `api2-${item.id}` })),
  ];

  return (
    <>
      <div>
        <Slider />
      </div>
      <div className="mt-12 grid grid-cols-3 pt-0 pr-36 pb-0 pl-36 gap-6 ">
        {combinedApi.map((item) => (
          <div
            key={item.key}
            className=" p-4 transform transition-transform shadow-lg hover:scale-105 hover:shadow-lg rounded-lg "
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
                className="border px-4 py-2 cursor-pointer rounded-full shadow-md m-auto"
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
export default Header;

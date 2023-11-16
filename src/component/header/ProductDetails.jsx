import { useParams } from "react-router-dom";
import { useData } from "../../contexApi/FatchData";
import { Link } from "react-router-dom";
import NaveBar from "./NaveBar";
import { useCart } from "./CartContext";

const ProductDetails = () => {
  const { Api1, Api2 } = useData();
  const { productId } = useParams();
  const { addToCart } = useCart();

  const combinedApi = [
    ...Api1.map((item) => ({ ...item, key: `api1-${item.id}` })),
    ...Api2.map((item) => ({ ...item, key: `api2-${item.id}` })),
  ].find((item) => item.key === productId);

  const handleAddToCart = () => {
    // Pass the selected item to the addToCart function
    addToCart(combinedApi);
  };

  if (!combinedApi) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <NaveBar />

      <div className="bg-blue-500 text-white px-4 py-2 w-36 cursor-pointer rounded-full hover:bg-blue-600 m-auto mt-20 text-center">
        <Link to="/"> Back</Link>
      </div>

      <div className=" flex m-auto w-1/2  bg-slate-300 rounded-md shadow-lg  p-10 mt-10">
        <div className="flex justify-center items-center min-h-full">
          <img
            src={combinedApi.imageUrl || "/path/to/placeholder-image.jpg"}
            alt={combinedApi.title}
            className="w-60 h-60  rounded-lg mt-4"
          />
          <div className=" py-6 px-8">
            <h1 className="text-2xl font-semibold ">{combinedApi.title}</h1>
            <p className="text-gray-600 my-4">${combinedApi.price}</p>
            <p>{combinedApi.description}</p>
            <hr className=" h-1 bg-zinc-950 mt-3" />

            <button
              className="border shadow-md px-4 py-2 bg-white cursor-pointer rounded-full mt-10"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

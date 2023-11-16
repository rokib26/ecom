import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./header/CartContext";
import NaveBar from "./header/NaveBar";
import { faTrashCan} from "@fortawesome/free-solid-svg-icons"
const AddCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId)
  }

  return (
    <>
      <NaveBar />
      <div>
        <h1>Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <img
              src={item.imageUrl || "/path/to/placeholder-image.jpg"}
              alt={item.title}
              className="w-60 h-60 rounded-lg mt-4"
            />
            <div className=" cursor-pointer">
            <FontAwesomeIcon icon={faTrashCan} 
             onClick={() => handleRemoveItem(item.id)}
            />
          </div>
          </div>
        
        ))}
      </div>
    </>
  );
};

export default AddCart;

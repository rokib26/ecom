import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./FireBase";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      <p className="mt-4">
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Logout;

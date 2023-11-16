import { Link, } from "react-router-dom";
import InputControl from "./InputControl";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSumbit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill in all fields");
    } else {
      setErrorMsg("");

      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          console.log(res);
        })
        .catch((err) => console.log("error", err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
        <button
          className=" border shadow-md px-4 py-2 rounded-full mt-4"
          onClick={handleSumbit}
        >
          Login
        </button>
        <p className="mt-4">
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

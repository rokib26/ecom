import { useState } from "react";
import InputControl from "./InputControl";
import { Link, } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./FireBase";

const Signup = () => {
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSumbit = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill in all fields");
    } else {
      setErrorMsg("");

      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          console.log(res);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          console.log(user);
        })
        .catch((err) => console.log("error", err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div>
          <InputControl
            label="Name"
            placeholder="Enter your Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
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
        </div>
        <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
        <button
          className=" border shadow-md px-4 py-2 rounded-full mt-4"
          onClick={handleSumbit}
        >
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

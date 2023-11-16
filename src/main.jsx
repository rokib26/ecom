// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "./contexApi/FatchData.jsx";
import { CartProvider } from "./component/header/CartContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <ApiProvider>
    <CartProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </CartProvider>
  </ApiProvider>
);

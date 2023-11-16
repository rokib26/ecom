import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Categories from "./component/header/Categories";
import SearchResultPage from "./component/header/SearchResultPage";
import ProductDetails from "./component/header/ProductDetails";
import Login from "./fireBese/Login";
import Singup from "./fireBese/Singup";
import AddCart from "./component/AddCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/search-results/:searchTerm"
          element={<SearchResultPage />}
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/addtocart" element={<AddCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

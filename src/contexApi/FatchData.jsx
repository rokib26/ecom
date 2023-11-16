import axios from "axios";
import { createContext, useContext, useEffect, useReducer, } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export const useData = () => useContext(ApiContext);

const initialState = {
  Api1: [],
  Api2: [],
  Error: null,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return {
        ...state,
        Api1: action.payload.Api1,
        Api2: action.payload.Api2,
      };
    case "FETCH-ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const [productApi1, productApi2] = await Promise.all([
        axios.get("https://dummyjson.com/products"),
        axios.get("https://fakestoreapi.com/products"),
      ]);
      dispatch({
        type: "FETCH-SUCCESS",
        payload: {
          Api1: productApi1.data.products.map((item) => ({
            ...item,
            imageUrl: item.images[0],
          })),
          Api2: productApi2.data.map((item) => ({
            ...item,
            imageUrl: item.image,
          })),
        },
      });
    } catch (error) {
      dispatch({
        type: "FETCH-ERROR",
        payload: error,
      });
    }
  };

  const values = {
    ...state,
  };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

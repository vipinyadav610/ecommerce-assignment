import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  GET_ALL_PRODUCTS
} from "../constants/product";
import Service from "../../Api/FetchBase";
export const fetchAllProducts = () => {
  return {
    type: GET_ALL_PRODUCTS,
    promise: Service.get("/products")
  };
};

export const addProductToCart = productId => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: productId
  };
};

export const removeProductToCart = productId => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId
  };
};

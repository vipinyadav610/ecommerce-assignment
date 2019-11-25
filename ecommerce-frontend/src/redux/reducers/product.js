import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from "../constants/product";
const intitialState = { loading: false, products: [], error: "", cart: [] };

export default (state = intitialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.response.data };
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: action.response.message };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...new Set([...state.cart, action.payload])]
      };
    case REMOVE_PRODUCT_FROM_CART:
      const cart = state.cart.filter(pid => pid !== action.payload);
      return {
        ...state,
        cart
      };
    default:
      return state;
  }
};

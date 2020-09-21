import { ADD_TO_CART, REMOVE_ITEM } from "./cartType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeItem = (product) => {
  return {
    type: REMOVE_ITEM,
    product,
  };
};

import { ADD_TO_CART, REMOVE_ITEM } from "./cartType";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let existedProduct = state.cart.find(
        (product) => action.product.id === product.id
      );
      if (existedProduct) {
        action.product.quantity += 1;
        action.product.price += action.product.details.price;
        return {
          ...state,
          totalPrice: state.totalPrice + action.product.details.price,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        action.product.quantity = 1;
        action.product.price = action.product.details.price;
        return {
          ...state,
          totalPrice: state.totalPrice + action.product.details.price,
          totalQuantity: state.totalQuantity + 1,
          cart: [...state.cart, action.product],
        };
      }
    default:
      return state;
  }
};

export default cartReducer;

import {
  ADD_CART,
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_ITEM,
} from "./cartType";

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch(action.type){
      case ADD_TO_CART:
          console.log(action.product);
          return{
              
          };
      default: return state;
  }


};

export default cartReducer;

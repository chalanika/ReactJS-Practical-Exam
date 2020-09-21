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
          //console.log(action.product);
          //let product = action.product;
          let existedProduct = state.cart.find((product) => action.product.id === product.id);
          if(existedProduct){
              action.product.quantity += 1;
              return{
                  ...state,
                  total:state.total + action.product.details.price,
              }
          }
          else{
            action.product.quantity = 1;
            return{
                ...state,
                total:state.total + action.product.details.price,
                cart : [...state.cart,action.product]
            }
          }
      default: return state;
  }


};

export default cartReducer;

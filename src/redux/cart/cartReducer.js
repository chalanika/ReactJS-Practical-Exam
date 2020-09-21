import {ADD_CART} from './cartType';

const initialState ={
    cart:[],
    prodocts:[],
}

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_CART:
            return{
                ...state,
               cart:state.cart.concat(action.payload)
            };
        default: return state;    
    }


};

export default cartReducer;
import {ADD_TO_CART,REMOVE_ITEM} from './cartType';

//add cart action
export const addToCart= (product)=>{
    return{
        type: ADD_TO_CART,
        product
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}



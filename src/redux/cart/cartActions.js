import {ADD_CART,ADD_TO_CART,ADD_QUANTITY,SUB_QUANTITY,REMOVE_ITEM} from './cartType';

export const addCart = (product) => {
    return{
        type:ADD_CART,
        product
    }
}

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
//subtract quantity action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add quantity action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}


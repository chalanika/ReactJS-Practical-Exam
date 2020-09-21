import {ADD_CART} from './cartType';

export const addCart = product => {
    return{
        type:ADD_CART,
        payload:product
    }
}
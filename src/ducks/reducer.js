import axios from 'axios';


const initialState = {
    product: [],
    shoppingCart: []
}

const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export function getProductInfo(id){
    return {
        type: GET_PRODUCT_INFO,
        payload: axios.get(`/product/${id}`)
    }
}
export function getAllProducts(){
    return {
        type: GET_ALL_PRODUCTS,
        payload: axios.get('/product/all')
    }
}
export function addToCart(itemId){
    //console.log("Hi")
    return {
        type: ADD_TO_CART,
        payload: axios.get(`/product/${itemId}`)
    }
}
export function removeFromCart(index){
    //console.log("REMOVE")
    return {
        type: REMOVE_FROM_CART,
        payload: index
    }
}


export default function reducer( state = initialState, action){
    //console.log('reducer is running')
    //console.log(state);
    switch( action.type) {
        case GET_PRODUCT_INFO + '_FULFILLED':
        return Object.assign({}, state, {product: action.payload.data});

        case GET_ALL_PRODUCTS + '_FULFILLED':
        //console.log(action.payload.data)
        return Object.assign({}, state, {product: action.payload.data});

        case ADD_TO_CART + '_FULFILLED':
        // console.log(action.payload);
        return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload.data[0]]})

        case REMOVE_FROM_CART:
        let newArr = state.shoppingCart.slice();
        newArr.splice(action.payload, 1);
        //console.log(action.payload)
        return Object.assign({}, state, {shoppingCart: newArr});

        

        default:
        return state;
    }
}
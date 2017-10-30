import axios from 'axios';

const initialState = {
    product: []
}

const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export function getProductInfo(id){
    const product = axios.get('http://localhost:5050/product/:id')
        .then (response => {
        return response.data
    })
    return {
        type: GET_PRODUCT_INFO,
        payload: product
    }
}

export function getAllProducts(){
    const product = axios.get('http://localhost:5050/product/all')
        .then (response => {
            console.log(response)
        return response.data
    })
    return {
        type: GET_ALL_PRODUCTS,
        payload: product
    }
}

export default function reducer( state = initialState, action){
    switch( action.type) {
        case GET_PRODUCT_INFO + '_FULFILLED':
        return Object.assign({}, state, {product: action.payload});

        case GET_ALL_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {product: action.payload});

        default:
        return state;
    }
}
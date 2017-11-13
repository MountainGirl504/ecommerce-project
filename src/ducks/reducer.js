import axios from 'axios';


const initialState = {
    product: [],
    shoppingCart: [], 
    total: 0.00,
    items: 0,
    user: {}
}

const GET_PRODUCT_INFO = 'GET_PRODUCT_INFO'
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CALC_TOTAL = 'CALC_TOTAL'
const ITEMS_IN_CART = 'ITEMS_IN_CART'
const GET_USER_INFO = 'GET_USER_INFO'
//const GET_CATEGORY = 'GET_CATEGORY'


// export function getCategory(category){
//     //console.log('category', category)
//     return {
//         type: GET_CATEGORY,
//         payload: axios.get(`/product/category/${category}`)
//     }
// }

export function getUserInfo(){
    return {
        type: GET_USER_INFO,
        payload: axios.get('auth/me')
    }
}

export function cartItems (){
    return {
        type: ITEMS_IN_CART,
        payload: null
    }
}

export function calculateTotal(){
    return {
        type: CALC_TOTAL,
        payload: null
    }
}
export function getProductInfo(id){
    //console.log(id)
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
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export default function reducer( state = initialState, action){
    //console.log('reducer is running')
    //console.log(state);
    switch( action.type) {
        case GET_PRODUCT_INFO + '_FULFILLED':
        return Object.assign({}, state, {product: action.payload.data});

        case GET_ALL_PRODUCTS + '_FULFILLED':
        //console.log("ALL PRODUCTS:", action.payload.data)
        return Object.assign({}, state, {product: action.payload.data});

        case ADD_TO_CART + '_FULFILLED':
        // console.log(action.payload);
        return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload.data[0]]})

        case REMOVE_FROM_CART:
        let newArr = state.shoppingCart.slice();
        newArr.splice(action.payload, 1);
        //console.log(action.payload)
        return Object.assign({}, state, {shoppingCart: newArr});

        case CALC_TOTAL:
        let newCart = state.shoppingCart.slice();
        let newTotal = 0;
        //console.log("it get here", state.shoppingCart)
        newCart.map( (item, i) => {
            return newTotal += parseFloat(item.price)
            //console.log("TOTAL:", newTotal)
        })
        return Object.assign ({}, state, {total: newTotal.toFixed(2)} );

        case ITEMS_IN_CART:
        let newShopCart = state.shoppingCart.slice();
        let itemsNumber;
        newShopCart.map( (item, i) => {
            return itemsNumber = newShopCart.length
            //console.log('ITEMS IN CART', itemsNumber)
        })
        return Object.assign({}, state, {items: itemsNumber});

        case GET_USER_INFO + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload.data})
        
        


        // case GET_CATEGORY + '_FULFILLED':
        // console.log("Get Here!")
        // console.log("CATEGORY" , action.payload.data)
        // return Object.assign ({}, state, {category: action.payload.data})


        default:
        return state;
    }
}
import React, { Component } from 'react'
import Header from './../Header/Header'
import Login from './../Login/Login'
//import ProductDetail from './../Product/ProductDetails'
import {connect} from 'react-redux'
import {getAllProducts} from './../../ducks/reducer'

class Home extends Component {

  render() {
    //const product = this.props.allProducts;
    //console.log(product);
    return (
      <div>
        <Header/>
        <Login/>
        <h1>This is a Home page</h1>
        <p>Product: { this.props.product }</p>
        <button>Add to Cart</button>
        {/* if user is lot logged in, take him to the login page         */}
      </div>
    )
  }
}
function mapStateToProps(state){
    return {product: state.product}
}
export default connect (mapStateToProps, {getAllProducts})(Home)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProductInfo} from './../../ducks/reducer'


class ProductDetails extends Component {
    
  render() {
    const product = this.props.product;
    //console.log("hello")
    return (
      <div>
        <h1>Product Details</h1>
        {product ? product.name : null}

      </div>
    )
  }
}

function mapStateToProps(state){
    return { product: state.product}
}
export default connect (mapStateToProps, {getProductInfo})(ProductDetails);

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProductInfo, addToCart} from './../../ducks/reducer'
import Header from './../Header/Header'
import {Link} from 'react-router-dom'


class ProductDetails extends Component {
    
componentWillMount(){
  this.props.getProductInfo(this.props.match.params.id);
}

  render() {
    const productInfo = this.props.product.map(item => {
      //console.log(item)  //logs {item}
      //console.log(this.props)
       return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p> {item.product_image} </p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <Link to='/cart'><button 
            onClick={ () => this.props.addToCart(item.id)}>
            Add to Cart</button>
            </Link>
        </div>
      )
    });
    return (
      <div>
        <Header/> 
        <h1>Product Details</h1>
        {productInfo}
      </div>
    )
  }
}

function mapStateToProps(state){
    return { product: state.product
            }
}
export default connect (mapStateToProps, {getProductInfo, addToCart})(ProductDetails);

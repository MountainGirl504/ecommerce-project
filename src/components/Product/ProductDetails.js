import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProductInfo, addToCart} from './../../ducks/reducer'
import {Link} from 'react-router-dom'
//import SmallCart from './../Cart/SmallCart'
import Navbar from './../Navbar/Navbar'


class ProductDetails extends Component {
    
componentDidMount(){
  this.props.getProductInfo(this.props.match.params.id);
}

  render() {
    const productInfo = this.props.product.map(item => {
      //console.log(item)  //logs {item}
      console.log("DETAILS:", this.props)
       return (
        <div key={item.id}>
          <p>{item.name}</p>
          <img className='mainPic' src={item.product_image} alt='main-pic' />
          <img className='pic2' src={item.image2} alt='pic2'/>
          <img className='pic3' src={item.image3} alt='pic3'/>
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
        <Navbar/>
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

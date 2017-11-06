import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductInfo, addToCart } from './../../ducks/reducer'
import { Link } from 'react-router-dom'
//import SmallCart from './../Cart/SmallCart'
import Navbar from './../Navbar/Navbar'
import './ProductDetail.css'



class ProductDetails extends Component {

  componentDidMount() {
    this.props.getProductInfo(this.props.match.params.id);
  }

  render() {
    const productInfo = this.props.product.map(item => {
      //console.log(item)  //logs {item}
      console.log("DETAILS:", this.props)
      return (
        <div key={item.id} className='detail-item-container'>
          <div className='small-pic-div'>
            <img className='pic2' src={item.image2} alt='pic2' />
            <img className='pic3' src={item.image3} alt='pic3' />
          </div>
          <div className='main-pic-div'>
            <img className='mainPic' src={item.product_image} alt='main-pic' />
          </div>
            <div className='details-div'>
              <div className='detail-name'><p>{item.name}</p></div>
              <div className='detail-description' id='hidden'><p>{item.description}</p></div>
              <div className='detail-price'><p>${item.price}</p></div>
              <div className='detail-btn '>
                <Link to='/'><button className='btn1'>Continue Shopping</button></Link>
                <Link to='/cart'><button className='btn2'
                onClick={() => this.props.addToCart(item.id)}>
                Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div><Navbar />
        <div className='detail-page'>
          <div className='detail-main-container'>
            {productInfo}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  }
}
export default connect(mapStateToProps, { getProductInfo, addToCart })(ProductDetails);

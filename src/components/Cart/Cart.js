import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar'
import { connect } from 'react-redux'
import { removeFromCart, calculateTotal, cartItems, getUserInfo, emptyCart } from './../../ducks/reducer'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import './../Product/ProductDetail.css'
import './Cart.css'
import Footer from './../Footer/Footer'


class Cart extends Component {
  

  componentDidMount() {    //invoked after a component is mounted
    this.props.calculateTotal(); //calculates total in small cart ONLY after hitting Cart
  }
  componentWillUpdate() {      //this will run every time we have a change on state
    this.props.calculateTotal()  //calculates total after removing an item from cart
    this.props.cartItems()
  }

  onToken = (token) => {
    token.card = void 0;
    //console.log('token', token) ;
    axios.post('api/payment', { token, amount: this.props.total })
      .then(response => {
        if (response !==500 ) {
         console.log("Thank you for the purchase")
         return this.props.emptyCart()
        }   
      });
  }

  render() {
    let cartContent = this.props.shoppingCart.map((item, index) => {
      return (
        <div key={index} className='cart-item-container '>
          <div className='small-pic-div'>
            <img className='pic2' id='cart-pic' src={item.product_image} alt='pic' />
          </div>
          <div className='cart-details'>
            <div className='cart-name'>{item.name}</div>
            <div className='cart-price' id='price'>${item.price}</div>
          </div>
            <div className='cart-btn'><button className='cart-btn1 ' onClick={() => this.props.removeFromCart(index)}>X Remove</button></div>
          </div>
      )
    })

    return (
      
      <div>
        <Navbar />
        <div className='cart-page'>
          <div className='cart-main-container'>
            {cartContent.length !== 0 ? 
            (
              <div>
                {cartContent}
                <div className='total-div'><h1 className='total'>TOTAL: ${this.props.total}</h1></div>
                <div className='cart-shop-pay'>
                <Link to='/'><button className='btn1'>Continue Shopping</button></Link>
               
               
                <div className='pay'>
                  <StripeCheckout 
                  token={this.onToken}
                  stripeKey='pk_test_UQi4oIALAi8O57uzzZUqDhQE'
                  amount={this.props.total * 100}/>
                </div>
                
                
                
                </div>
              </div>
            ) : (
                <div className='empty-cart'>
                  <div className='empty-message '><h3>Your Cart is empty ...</h3></div>
                  <div ><Link to='/'><button className='btn1'>Go Shopping</button></Link></div>
                </div>
              )}
              
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart,
    total: state.total,
    items: state.items, 
    user: state.user
  }
}
export default connect(mapStateToProps, { removeFromCart, calculateTotal, cartItems, getUserInfo, emptyCart })(Cart);

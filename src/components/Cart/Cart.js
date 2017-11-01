import React, { Component } from 'react'
import Header from './../Header/Header'
import { connect } from 'react-redux'
import { removeFromCart } from './../../ducks/reducer'
import { Link } from 'react-router-dom'

class Cart extends Component {


  render() {
    let cartContent = this.props.shoppingCart.map((item, index) => {
      //console.log(this.props.shoppingCart)
      return (
        <div key={item.id}>
          <p>{item.product_image}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => this.props.removeFromCart(index)}>Delete</button>
        </div>
      )
    })
    return (
      <div>
        <Header />
        <h1>This is your cart</h1>
        {cartContent.length !== 0 ? (
          <div>
            {cartContent} <button>Proceed to Checkout</button>
          </div>
        ) : (
          <div>
             <h3>Your Cart is empty</h3>
             <Link to='/'><button>Go Shopping</button></Link>
          </div>
          )}

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    shoppingCart: state.shoppingCart
  }
}
export default connect(mapStateToProps, { removeFromCart })(Cart)

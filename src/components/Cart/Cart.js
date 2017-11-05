import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar'
import { connect } from 'react-redux'
import { removeFromCart, calculateTotal, cartItems } from './../../ducks/reducer'
import { Link } from 'react-router-dom'

class Cart extends Component {

  componentDidMount(){    //invoked after a component is mounted
    this.props.calculateTotal(); //calculates total in small cart ONLY after hitting Cart
  }
  componentWillUpdate(){      //this will run every time we have a change on state
    this.props.calculateTotal()  //calculates total after removing an item from cart
    this.props.cartItems()    
  }

  render() {
    let cartContent = this.props.shoppingCart.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.product_image} alt='pic'/>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => this.props.removeFromCart(index)}>Delete</button>
          
        </div>
      )
    })
    
    return (
      <div>
        <Navbar/>
        <h1>This is your cart</h1>
        {cartContent.length !== 0 ? (
          <div>
            {cartContent} 
            <h1>TOTAL: {this.props.total}</h1>
            <button>Continue Shopping</button>
            <button>Proceed to Checkout</button>
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
    shoppingCart: state.shoppingCart,
    total: state.total, 
    items: state.items
  }
}
export default connect(mapStateToProps, { removeFromCart, calculateTotal, cartItems })(Cart);

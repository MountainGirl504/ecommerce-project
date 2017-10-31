import React, { Component } from 'react'
import Header from './../Header/Header'
import {connect} from 'react-redux'
import {removeFromCart} from './../../ducks/reducer'

class Cart extends Component {

componentWillMount(){
  //this.props.addToCart();
  this.props.removeFromCart();
}

  render() {
    let cartContent = this.props.shoppingCart.map((item, i) => {
     console.log('blah')
     //console.log(item)
      return (
        <div key={item.id}>
          <img src={item.product_image} alt='main-img'/>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => this.props.removeFromCart(item)}>Delete</button>
        </div>
      )
    })
    return (
      <div>
          <Header/>
        <h1>This is your cart</h1>
        {cartContent[0] ? cartContent && <button>Proceed to Checkout</button> 
          : <h3>Your shopping cart is empty!</h3> 
          && <button>Go Shopping!</button>
        }
        
      </div>
    )
  }
}
function mapStateToProps (state){
  return{
    shoppingCart: state.shoppingCart
  }
}
export default connect(mapStateToProps, {removeFromCart})(Cart)

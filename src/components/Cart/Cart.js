import React, { Component } from 'react'
import Header from './../Header/Header'

export default class Cart extends Component {
  render() {
    return (
      <div>
          <Header/>
        <h1>This is your cart</h1>
        <button>Proceed to Checkout</button>
      </div>
    )
  }
}

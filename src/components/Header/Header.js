import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/cart'><li>Cart</li></Link>
            </ul>
        </div>
      </div>
    )
  }
}

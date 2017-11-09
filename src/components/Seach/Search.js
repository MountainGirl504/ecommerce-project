import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './../Home/Home.css'
import { getAllProducts, addToCart, calculateTotal, cartItems } from './../../ducks/reducer'
import { connect } from 'react-redux'


class Search extends Component {
  constructor() {
    super()

    this.state = {
      allProducts: [],
      filteredList: []
    }
  }
  componentWillMount() {
    axios.get('/product/all')
      .then(res => {
        // console.log(res.data)
        this.setState({
          allProducts: res.data
        })
        let filteredItems = this.state.allProducts.filter((item, i) => {
          let input = this.props.match.params.searchItem.toLowerCase();
          let name = item.name.toLowerCase();
          return name.includes(input)
        })
        
        this.setState({
          filteredList: filteredItems
        })
      })
  }


  render() {
    let filtered;
    if(this.state.filteredList){
       filtered = this.state.filteredList.map((item, i) => {
        if (this.state.allProducts) {
          return (
            <div className='item-container'>
              <div className='pic-container'><Link to={`/productDetails/${item.id}`}>
                <img className='main-pic' src={item.product_image} alt='main-pic' /></Link>
              </div>
              <div className='item-name'>{item.name}</div>
              <div className='price-btn-div'>
                <div className='price'>${item.price}</div>
                <div className='btn-div'>
                  <button className='btn'
                    onClick={() => this.props.addToCart(item.id)}>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )
        } 
      })
    }else{
      filtered = <div>waiting......</div> 
    }
    return (
      <div>
        <Navbar />
        <div className='home-page'>
          <div className='main-container'>
            {filtered.length > 0 ? 
              filtered 
              : <div className='notFound-message empty-cart'>Nothing Found</div>
            }
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    total: state.total,
    items: state.items,
    product: state.product
  }
}
export default connect(mapStateToProps, { getAllProducts, addToCart, calculateTotal, cartItems })(Search)
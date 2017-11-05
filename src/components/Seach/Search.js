import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './../Navbar/Navbar'


export default class Search extends Component {
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
   
    let filtered = this.state.filteredList.map((item, i) => {
      if (this.state.allProducts) {
      console.log("Get here too")
      return (
        <div key={i}>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div><img src={item.product_img} alt='' /></div>
          <div>{item.price}</div>
        </div>
      )}
    })
  
    return (
      <div>
        <Navbar />
        {filtered}
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './../Navbar/Navbar'


export default class Category extends Component {
    
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
            console.log(this.state.allProducts)
            let filteredItems = this.state.allProducts.filter((item, i) => {
              let input = this.props.match.params.category.toLowerCase();
              let category= item.category.toLowerCase();
              return category.includes(input)
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
    
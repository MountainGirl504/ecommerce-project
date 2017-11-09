import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './../Navbar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import {addToCart } from './../../ducks/reducer'
import {connect} from 'react-redux'


class Category extends Component {

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
                //console.log(this.state.allProducts)
                let filteredItems = this.state.allProducts.filter((item, i) => {
                    let input = this.props.match.params.category.toLowerCase();
                    let category = item.category.toLowerCase();
                    return category.includes(input)
                })
                
                this.setState({
                    filteredList: filteredItems
                })
            })
    }

    handleClick(id) {           //BUY button on the Home page
        this.props.addToCart(id)
        .then(() => {
            this.props.calculateTotal()
            this.props.cartItems()
        })
    }

    render() {

        let filtered = this.state.filteredList.map((item, i) => {
            if (this.state.allProducts) {
                //console.log("Get here too")
                return (
                    <div className='item-container' key={item.id} >
                    <div className='pic-container' ><Link to={`/productDetails/${item.id}`}>
                        <img className='main-pic' src={item.product_image} alt='main-pic' /></Link></div>
                    <div className='item-name'>{item.name}</div>
                    <div className='price-btn-div'>
                        <div className='price'>${item.price}</div>
                        <div className='btn-div'><button className='btn'
                            onClick={() => this.props.addToCart(item.id)}>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                )
            }
        })

        return (
            <div>
                <Navbar />
                <div className='home-page'>
                    <div className='main-container'>
                    {filtered}
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
export default connect (mapStateToProps, {addToCart}) (Category)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts, addToCart, calculateTotal, cartItems } from './../../ducks/reducer'
import { Link } from 'react-router-dom'
import Navbar from './../Navbar/Navbar'
import './Home.css'
import Landing from './../Landing/Landing'
import Footer from './../Footer/Footer'


class Home extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    handleClick(id) {           //BUY button on the Home page
        this.props.addToCart(id)
            .then(() => {
                this.props.calculateTotal()
                this.props.cartItems()
            })
    }

    render() {
        const products = this.props.product.map((item, i) => {
            //console.log(item)                  
            return (

                <div className='item-container' key={item.id} >
                    <div className='pic-container' ><Link to={`/productDetails/${item.id}`}>
                        <img className='main-pic' src={item.product_image} alt='main-pic' /></Link>
                    </div>
                    <div className='item-name'>{item.name}</div>
                    <div className='price-btn-div'>
                        <div className='price'>${item.price}</div>
                        <div className='btn-div'><button className='btn'
                            onClick={() => this.handleClick(item.id)}>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

            )
        })

        return (
            <div className='home-page-container animated fadeIn'>
                <Navbar />
                <Landing/>
                <div className='home-page'>
                    <div className='main-container'>
                        {products}
                    </div>
                </div>
                <Footer/>
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
export default connect(mapStateToProps, { getAllProducts, addToCart, calculateTotal, cartItems })(Home);
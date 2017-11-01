import React, { Component } from 'react'
import Header from './../Header/Header'
import Login from './../Login/Login'
import { connect } from 'react-redux'
import { getAllProducts, addToCart} from './../../ducks/reducer'
import { Link } from 'react-router-dom'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            products: []    //changing state from redux is hard, that's why bring it to local state.
        }
    }

    componentDidMount() {
        this.props.getAllProducts().then(() => {
            this.setState({
                products: this.props.product
            })
        });

    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    handleSearch(userInput){       
        let filteredList = this.props.product.filter( item => {  //filter thought the original products, and not filtered ones
            let input = userInput.toLowerCase()
            let name = item.name.toLowerCase()
            return name.includes(input)
        })
        this.setState({
           products: filteredList 
        })
        console.log('filtered:', filteredList);
    }

    render() {
        const products = this.state.products.map((item, i) => {                    
            return (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <Link to={`/productDetails/${item.id}`}>
                        <p> {item.product_image} </p>
                    </Link>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <button 
                        onClick={ () => this.props.addToCart(item.id)}>Buy
                    </button>
                </div>
            )
        })
        return (
            <div>
                <Header />
                <input type='text' placeholder='Search' value={this.state.userInput}
                    onChange={(e) => this.handleChange(e.target.value)} />
                <button 
                    onClick ={() => this.handleSearch(this.state.userInput)}>Find!
                </button> 
                <Login />
                <h1>This is a Home page</h1>
                <p>Product: </p>
                {products}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}
export default connect(mapStateToProps, { getAllProducts, addToCart})(Home);
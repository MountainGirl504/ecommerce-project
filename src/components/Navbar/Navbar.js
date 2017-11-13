import React, { Component } from 'react'
import bag2 from '../../Assets/bag-icon2.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { calculateTotal, cartItems, getUserInfo } from './../../ducks/reducer'
import './Navbar.css'



class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            userInput: '',
            userData: {}
        }
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.getUserInfo();
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className='main-header'>
                    <div className='persistent-nav'>
                    <Link to='/' className='logo'></Link>


                        <div className='search-div'>
                            <div ><input className='input-box' type='text'  placeholder='Search...'
                                onChange={this.handleChange}/></div>
                            <div className='find-box'><Link to={`/search/${this.state.userInput}`} onSubmit={this.props.find} style={{  color: 'lavenderblush' }}><button className='btn-find' type='submit'>FIND</button> 
                            </Link></div> 
                        </div>  


                        
                        <div className='nav-login-div'>
                            {this.props.userData.user_name ?
                            (<div className='hello-logout-div'>
                                <div className='hello-message animated pulse'>Hello, {this.props.userData.user_name}!</div>
                                <div className='nav-logout' ><a href={process.env.REACT_APP_LOGOUT} style={{ color: 'lavenderblush' }}>Logout</a></div>
                            </div>
                            ) :
                            <div className='nav-login' ><a href={process.env.REACT_APP_LOGIN} style={{ color: 'lavenderblush' }}> Login / Register </a></div>
                            }
                        </div>
                            

                        <div className='shop-div'>
                            <Link to='/cart'><div className='bag-img'><img src={bag2} alt="" className='bag' /></div></Link>
                            <div className='num-item'>({this.props.shoppingCart.length})</div>
                            <div className='num-total'>${this.props.total}</div>
                        </div>
                      
                    </div>

                    <div className='navbar animated slideInDown'>
                        <div className='inner-navbar'>
                       <Link to='/' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='home-div category'><span>Home</span></div></Link>

                        <Link to='/product/category/woman' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='women-div category' ><span>Women</span></div></Link>

                        <Link to='/product/category/men' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='men-div category'><span>Men</span></div></Link>

                        <Link to='/product/category/boys' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='boys-div category' ><span>Boys</span></div></Link>

                        <Link to='/product/category/girls' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='girls-div category'><span>Girls</span></div></Link>
                        
                        <Link to='/cart' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='cart-div category' ><span>Cart</span></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        shoppingCart: state.shoppingCart,
        total: state.total,
        items: state.items, 
        userData: state.user
    }
}
export default connect(mapStateToProps, { calculateTotal, cartItems, getUserInfo })(Navbar)
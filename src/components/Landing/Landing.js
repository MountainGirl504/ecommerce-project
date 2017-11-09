import React, { Component } from 'react'
import pic1 from './../../Assets/FrontPic1.jpeg'
import pic2 from './../../Assets/FrontPic2.jpeg'
import pic3 from './../../Assets/FrontPic3.jpeg'
import './Landing.css'
import {Link } from 'react-router-dom'


export default class Landing extends Component {

    render() {
        return (
            <div className='landing-page'>
                
                <div className='landing-pic-div'>

                <div className='text-box-div'>
                        <p className='code-text animated bounceInRight'> 30% OFF full-price styles.
                            Online & In stores.
                            Use code GETSHOPPING.
                        </p>
                    </div>
                    <div className='all-pic-wrapper'>
                    <Link to='/holiday'><div className='pic1-div'>
                        <p className='bottom-left'>Need holiday outfits?</p>
                        <img className='landing-pic1' src={pic1} alt="pic1" />
                    </div></Link>
                    <Link to='/fallstyle'><div className='pic2-div'>
                        <p className='bottom-left'>New fall essentials</p>
                        <img className='landing-pic2' src={pic2} alt="pic2" />
                    </div></Link>
                    <Link to='festive'><div className='pic3-div'>
                        <p className='bottom-left'>Festive looks we love</p>
                        <img className='landing-pic3' src={pic3} alt="pic3" />
                    </div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

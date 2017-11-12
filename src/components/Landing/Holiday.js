import React, { Component } from 'react'
import holidayPic from './../../Assets/holidayPic.jpeg'
import Navbar from './../Navbar/Navbar'
import {Link} from 'react-router-dom'
import holidayLook1 from './../../Assets/holidayLook1.jpeg'
import holidayLook2 from './../../Assets/holidayLook2.jpeg'
import holidayLook3 from './../../Assets/holidayLook3.jpeg'
import Footer from './../Footer/Footer'


export default class Holiday extends Component {
  render() {
    return (
     <div className='holiday-page'>
          <Navbar/>
          <div className='landing-page'>
            <div className='holiday-pic-div'>
                <div><h1 className='text-center1'>HOLIDAY</h1></div>
                <div><h2 className='text-center2'>OUTFIT IDEAS</h2></div>
                <div><h3 className='text-center3'>For whatever you have planned</h3></div>
                <img className='holiday-pic' src={holidayPic} alt=""/>
            </div>
          </div>
          <div className='holiday-look-div'>
                <div className='hol-look'>
                    <div className='shop-look-text'>SHOP THESE LOOKS</div>
                </div>  
                    <div className='holiday-pics-div'>
                        <div className='align-text-div'>
                        <div className='holiday-page-text'>Girls night out</div>
                        <Link to='/productDetails/46'><img className='look' src={holidayLook1} alt=""/></Link>
                        </div>
                        <div className='align-text-div'>
                        <div className='holiday-page-text'>Family celebration</div>
                        <Link to='/productDetails/47'><img className='look' src={holidayLook2} alt=""/></Link>
                        </div>
                        <div className='align-text-div'>
                        <div className='holiday-page-text'>Office holiday Party</div>
                        <Link to='/productDetails/45'><img className='look' src={holidayLook3} alt=""/></Link>
                        </div>
                    </div>
                
          </div>
          <Footer/>
      </div>
    )
  }
}
import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar'
import fallStyle from './../../Assets/fallStyle.jpeg'
import './Landing.css'
import fallStyle1 from './../../Assets/fallStyle1.jpeg'
import fallStyle2 from './../../Assets/fallStyle2.jpeg'
import fallStyle3 from './../../Assets/fallStyle3.jpeg'
import { Link } from 'react-router-dom'

export default class FallStyle extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <div className='landing-page'>
            <div className='fall-pic-div'>
            
                        <div className='fall-text1'>NEW FALL ESSENTIALS</div>
                        <div className='fall-text2'>Demin chore jackets, Polartec hoodies and Chelsea boots are just some of the go-to items you'll need this season.</div>

                        <Link to='festive'><img className='fall-pic' src={fallStyle} alt=""/></Link>
            </div>       
       </div>
        <div className='fall-wrapper'>
    <div className='fall-look-main-div'>


        <div className='fall-look-div'>
            <div className='hold-text'>
                <div className='fall-text'>A RUGGED SWEATER</div>
                <div className='text-fall2'>Our lambwool sweaters are made to stand up to the coolest day of fall (and winter).</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/49'><img id='mens-pic' src={fallStyle1} alt=""/></Link></div>
        </div>

        <div className='fall-look-div'>
            <div className='hold-text' >
                <div className='fall-text'>CHAMOIS </div>
                <div className='text-fall2'>This brushed cotton shirt takes ots name from an animal native to Europe and Turkey known for its soft leather.</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/50'><img id='mens-pic' src={fallStyle2} alt=""/></Link></div>
        </div>

        <div className='fall-look-div'>
            <div className='hold-text'>
                <div className='fall-text'>POLARTEC FLEECE</div>
                <div className='text-fall2'>Polartec's light weight fleece retainsbody heat while still being breathable.</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/51'><img id='mens-pic' src={fallStyle3} alt=""/></Link></div>
        </div>


    </div>
    </div>
      </div>
    )
  }
}

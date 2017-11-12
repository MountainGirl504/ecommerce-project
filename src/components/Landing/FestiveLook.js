import React, { Component } from 'react'
import Navbar from './../Navbar/Navbar'
import FestivePic from './../../Assets/FestivePic.jpeg'
import './Landing.css'
import Festive1 from './../../Assets/Festive1.jpeg'
import Festive2 from './../../Assets/Festive2.jpeg'
import Festive3 from './../../Assets/Festive3.jpeg'
import { Link } from 'react-router-dom'
import Footer from './../Footer/Footer'


export default class FestiveLook extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <div className='landing-page'>
            <div className='fall-pic-div festive-pic-div'>
            
                        <div className='fall-text1 holiday-text1'>holiday edition</div>
                        <div className='fall-text2 holiday-text2'>Fun, festive, foolproof outfits for everything they've gor planned.</div>

                        <img className='festive-pic' src={FestivePic} alt=""/>
            </div>       
       </div>
        <div className='fall-wrapper'>
    <div className='fall-look-main-div'>


        <div className='fall-look-div festive-div'>
            <div className='hold-text'>
                <div className='fall-text'>It's Sparkes...</div>
                <div className='text-fall2'>Plenty of velvet and sparkly sneakers!</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/53'><img id='mens-pic' src={Festive1} alt=""/></Link></div>
        </div>

        <div className='fall-look-div festive-div'>
            <div className='hold-text' >
                <div className='fall-text'>Fair Isle Sweaters</div>
                <div className='text-fall2'>including our one-of-a-kind take, with rockets, robots and monsters.</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/52'><img id='mens-pic' src={Festive2} alt=""/></Link></div>
        </div>

        <div className='fall-look-div festive-div'>
            <div className='hold-text'>
                <div className='fall-text'>For Every Day at School</div>
                <div className='text-fall2'>Fidget-free jeans and chinos.</div>
            </div>
            <div className='fall-look'><Link to='/productDetails/54'><img id='mens-pic' src={Festive3} alt=""/></Link></div>
        </div>


    </div>
    </div>
    <Footer/>
      </div>
    )
  }
}


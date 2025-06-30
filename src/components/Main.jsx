import React from 'react'
import Sviper from './Sviper'
import Footer from './Footer'
import AutoSwiper from './AutoSwiper'
import Malumot from './Malumot'
import About from './About'
import Header from './Header'


function Main() {


    return (
        <>
        <Header/>
          <div className="scrolling-text-container">
              <div className="scrolling-text">
            <h1>WEB CODE</h1>
            <h1>SHEWER</h1>
            <h1>UGEH</h1>
            <h1>DEWELOPMENT CODE</h1>
            <h1>WEB CODE</h1>
            <h1>SHEWER</h1>
            <h1>UGEH</h1>
            <h1>DEWELOPMENT CODE</h1>
         </div>
          </div>
         <AutoSwiper/>
          <Malumot/>
          <About/>
         <Sviper/>
         
         <div className='malumot_div'>
            <h1>How does it work</h1>
            <div className='malumot'>
               <div>
                  <img src="5.png" alt="" />
                  <h3>Select location</h3>
                  <p>We will pick up your order and deliver it to your location.</p>
               </div>
               <div>
                  <img src="6.png" alt="" />
                  <h3>Choose order</h3>
                  <p>You can find us anywhere on the menu, just search for gina.</p>
               </div>
               <div>
                  <img src="7.png" alt="" />
                  <h3>Pay advanced</h3>
                  <p>It's quick, safe, and simple. Select several methods of payment</p>
               </div>
               <div>
                  <img src="5.png" alt="" />
                  <h3>Enjoy the fire.</h3>
                  <p>The grass is harvested from the garden and delivered directly to your home.</p>
               </div>
            </div>
         </div>
         <Footer/>
        </>
    )
}

export default Main

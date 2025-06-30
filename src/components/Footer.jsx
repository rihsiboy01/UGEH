import React from 'react'
import Sabmit from './Sabmit'

function Footer() {
    return (
        <>
        <Sabmit/>
        <div className='contakts'>
               <h1>Contact</h1>
         <div>
         <div>
                 <div>
            <h3>Follow Us</h3>
           <div className='con'>
             <section>
                 <img src="i.png" alt="" />
                 <p>instogram</p>
            </section>
            <section>
                <img src="f.png" alt="" />
                <p>facebook</p>
            </section>
            <section>
                <img src="y.png" alt="" />
                <p>youtube</p>
            </section>
           </div>
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8036073866047!2d69.12696187587702!3d41.35662227130378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8f39edbbebf1%3A0xda5a2cc6efe5de24!2sOltin%20Tepa!5e0!3m2!1sen!2s!4v1750250840225!5m2!1sen!2s" width="550" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
         </div>
         </div>
        </div>
        </>
    )
}

export default Footer

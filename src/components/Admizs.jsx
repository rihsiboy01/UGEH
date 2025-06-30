import React from 'react'
import { Link, Route, Routes } from 'react-router'

function Admizs() {
       let black = ()=>{
          document.body.style.background="black"
          document.body.style.color="lime"
       }
       let grin = ()=>{
          document.body.style.background="green"
          document.body.style.color="yellow"
       }
       let yellow = ()=>{
          document.body.style.background="yellow"
          document.body.style.color="black"
       }
       let speak = ()=>{
          document.body.style.background="white"
        //   document.body.style.color="lime"
       }
    return (
        <div className='aziz'>
        <div>
            <Link to={"/"}><button>seting or color</button></Link>
            <Link to={"/seting_or_password"}><button>seting or password</button></Link>
            <Link to={"seting contakts"}><button>seting contakts</button></Link>
        </div>
         <Routes>
        
        <Route path="/" element={<div>
  <h1>seting or color</h1>
    <div>
        <button onClick={black}>black</button>
        <button onClick={grin}>grin</button>
        <button onClick={yellow}>yellow</button>
        <button onClick={speak}>speac</button>
    </div>
        </div>} />
       
      </Routes>
        </div>
    )
}

export default Admizs

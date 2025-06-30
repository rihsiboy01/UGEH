import { useEffect, useRef, useState } from "react";
import "./App.css";

import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Admizs from "./components/Admizs";
import Icons from "./components/Icons";
import  AOS  from "aos";
import "aos/dist/aos.css"; 

function App() {


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once:false
    });
  }, []);
    let b = useRef()


    const[i,setI]=useState("")
    const[il,setIl]=useState()
    const[ilm,setIlm]=useState()


    let send =()=>{
         localStorage.setItem('name', i)
         console.log(localStorage.getItem("name"));
         localStorage.setItem('pasword', il)
         console.log(localStorage.getItem("pasword"));
         localStorage.setItem('id', ilm)
         console.log(localStorage.getItem("id"));
    }
   
    
  return (
    <div className="iki" ref={b}>
        <Routes>
        
        <Route path="/" element={<Main />} />
        <Route path="/admins" element={<Admizs bol={b}/>} />
        <Route path="/game" element={<Icons/>} />
         <Route path='/seting_or_password' element={
            <div className="wan">
                <h1>seting or password</h1>
                <div>
                <input type="text" onChange={(e)=>setI(e.target.value)} placeholder="name"/>
                <input type="password" onChange={(e)=>setIl(e.target.value)} placeholder="pasword"/>
                <input type="number" onChange={(e)=>setIlm(e.target.value)} placeholder="id"/>
                <button onClick={send}>send</button>
                </div>
            </div>
        }/>
      </Routes>
    </div> 
    
    
  );
}

export default App;

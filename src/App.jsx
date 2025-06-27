import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admizs from "./components/Admizs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState([]);
  let a = () => {
    a.prevendefaut();
    fetch("http://localhost:3000/uuu")
      .then((res) => res.json())
      .then((data) => {
        setCount(data);
      }); 
  };
  console.log(count);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once:false
    });
  });

  return (
    <>
      <Header />
      <Main api={count} />
      <Footer />

      <Routes>
        
        <Route path="/admins" element={<Admizs/>} />
      </Routes>
    </>
  );
}

export default App;

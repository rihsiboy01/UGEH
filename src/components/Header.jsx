import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (localStorage.getItem("name") === username && password === localStorage.getItem("pasword") && code === localStorage.getItem("id")) {
            navigate('/admins');
        } else {
            alert('Big error: Invalid credentials');
        }
    };

    useEffect(() => {
        const button = document.querySelector('.btn');

        const handleButtonClick = (e) => {
            const isSelected = e.target.getAttribute('aria-selected') === 'true';
            e.target.setAttribute('aria-selected', String(!isSelected));
        };

        const handleMouseOver = (event) => {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const text = event.target.dataset.value;
            let iteration = 0;

            const interval = setInterval(() => {
                event.target.innerText = text
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join('');

                if (iteration >= text.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        };

        if (button) {
            button.addEventListener('click', handleButtonClick);
        }

        const h1 = document.querySelector('h1');
        if (h1) {
            h1.addEventListener('mouseover', handleMouseOver);
        }

        return () => {
            if (button) button.removeEventListener('click', handleButtonClick);
            if (h1) h1.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {showSearch && <input type="text" placeholder="Search" className="mod" />}

            {modalOpen && (
                <div className="box">
                    <h3 onClick={() => setModalOpen(false)}>x</h3>
                    <div className="modal">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Number"
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            )}

            <header>
                <img src="logo.png" alt="Logo" className="logo" />
                <div className="nav">
                    <Link to={"/"}>home</Link> 
                    <button className="btn1" onClick={() => setModalOpen(true)}>Window Admins</button>
                    <a href="#divr">About</a> 
                    <button className="btn2" onClick={() => setShowSearch(true)}>
                        <img src="1.png" alt="Search" /> Search Video
                    </button>
                    {/* <Link to={"/game"}>game</Link> */}
                    <button className="box__link button-animation">
                        <img src="2.png" alt="Login" /> Login
                        <span></span><span></span><span></span><span></span>
                    </button>
                </div>
            </header>

            <div className="section">
                <h1 data-value="Do you need a grass">Do you need a grass</h1>
                <div className="circle">
                    <span className="portfolio"></span>
                </div>
                <p>Find the gas that gives you the layer you like in just a few clicks.</p>

                <div className="section_div">
                    <img src="4.png" alt="Address visual" className="section_div_img" />
                    <input type="text" placeholder="Enter Your Address" className="section_div_inp" />
                    <div className="container">
                        <button type="button" className="btn" aria-selected="true">Save</button>
                    </div>
                </div>

                <img src="biz.png" alt="Business visual" className="section_img" />
            </div>
        </>
    );
}

export default Header;

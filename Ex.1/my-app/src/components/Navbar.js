import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="leftNavbar">
                <div id="title">HELSINGIN SANOMAT</div>
                <ul>
                    <li><a href="#option1">Etusivu</a></li>
                    <li><a href="#option2">Uutiset</a></li>
                    <li><a href="#option3">Lehdet</a></li>
                    <li><a href="#option4">Asiakaspalvelu</a></li>
                </ul> 
            </div>
            <div className="rightNavbar">
                <div id="option5">Tilaa</div>
                <div id="option6">Kirjaudu</div>
                <div id="option7">Valikko</div>
            </div>
        </div>
    )
};

export default Navbar;
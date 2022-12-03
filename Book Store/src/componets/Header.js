import './fac.css';
import './header.css';
import React from 'react'
import { Link } from 'react-router-dom'
import FormatedFac from './Contact'

import './fac.css';
const Header = () => {
    return (
        <>
            <div class="responsive-bar" id="myHeader">
                <div class="logo">
                    <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="logo" />
                </div>
                <div class="menu">
                    <h4>Menu</h4>
                </div>
            </div>
            <nav>
                <div class="logo">
                    <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="logo" />
                </div>
                <ul>
                    <li> <Link to="./">Home</Link></li>
                    <li><Link to="./about">About us</Link></li>
                    <li><Link to="./Faculties">All Book</Link></li>
                    <li><Link to="./Faculty/add">Add Book</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Header

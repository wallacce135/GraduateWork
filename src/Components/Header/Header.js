import React from "react";
import './Header.css';
import searchImg from '../../assets/search-img.svg';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <div className="header">
            <Link to="/" id="logo"><h1>проф<br/>ресурс</h1></Link>

            <div className="search">
                <img src={searchImg}/>
                <input placeholder="найти"/>
            </div>

            <div className="navButtons">
            <Link id="logBtn" to="">войти</Link>
            <Link id="regBtn" to="">регистрация</Link>
            </div>
        </div>
    )
}

export default Header
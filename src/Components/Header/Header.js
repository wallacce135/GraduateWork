import React from "react";
import './Header.css'
import searchImg from '../../assets/search-img.svg'


function Header(){
    return(
        <div className="header">
            <a href="/" id="logo"><h1>проф<br/>ресурс</h1></a>

            <div className="search">
                <img src={searchImg}/>
                <input placeholder="найти"/>
            </div>

            <div className="navButtons">
            <a id="logBtn" href="">войти</a>
            <a id="regBtn" href="">регистрация</a>
            </div>
        </div>
    )
}

export default Header
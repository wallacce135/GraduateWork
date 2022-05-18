import React, { useEffect } from "react";
import './Header.css';
import searchImg from '../../assets/search-img.svg';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import { connect } from "react-redux";


function Header(props){
    
    console.log(props.auth);

    return(
        <div className="header">
            <Link to="/" id="logo"><h1>проф<br/>ресурс</h1></Link>

            <div className="search">
                <img src={searchImg}/>
                <input placeholder="найти"/>
            </div>

            {!JSON.parse(props.auth) ? (
            <div className="navButtons">
                <Link id="logBtn" to="/login">войти</Link>
                <Link id="regBtn" to="/registration">регистрация</Link>
            </div>)
            : <div></div>
            }
        </div>
    )
}




export default Header
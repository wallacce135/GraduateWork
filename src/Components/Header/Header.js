import React from "react";
import './Header.css';
import searchImg from '../../assets/search-img.svg';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { setAuthorisedActionCreator } from "../Registration/UsersReducer";
import Cookies from 'js-cookie';


function Header(props){

    const navigate = useNavigate();

    const Exit = (props) =>{
        Cookies.set('loggined', false);
        Cookies.set('user_id', null);
        Cookies.set('login', null);
        props.ChangeAuthorized(false);
        navigate("/");
        
    }

    return(
        <div className="header">
            <Link to="/" id="logo"><h1>проф<br/>ресурс</h1></Link>

            <div className="search">
                <img src={searchImg} alt="not found"/>
                <input placeholder="найти"/>
            </div>

            {!JSON.parse(props.auth) ? (
            <div className="navButtons">
                <Link id="logBtn" to="/login">войти</Link>
                <Link id="regBtn" to="/registration">регистрация</Link>
            </div>) : (<div className="navButtons">
                <button className="exitBtn" onClick={() => Exit(props)}>Выйти</button>
            </div>)
            }
        </div>
    )
}

function MapStateToProps(state){
    return{
        
    }
}

function MapDispatchToProps(dispatch){
    return{
        ChangeAuthorized: (value) => dispatch(setAuthorisedActionCreator(value))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(Header)
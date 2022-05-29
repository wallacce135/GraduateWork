import React, { useState } from "react";
import './Header.css';
import searchImg from '../../assets/search-img.svg';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { setAuthorisedActionCreator } from "../Registration/UsersReducer";
import Cookies from 'js-cookie';
import { setArticleActionCreator } from "../Article/ArticleReducer";
import axios from "axios";


function Header(props){

    const navigate = useNavigate();

    const Exit = (props) =>{
        Cookies.set('loggined', false);
        Cookies.set('user_id', null);
        Cookies.set('login', null);
        props.ChangeAuthorized(false);
        navigate("/");
        
    }

    function SetFilter(value){
        SetSearchText(value);
        if(!value.length){
            axios.get('http://localhost:8080').then(res =>{
            props.SetArticles(res.data);
            })
        }
        let newArr = props.articles.filter(el =>{
            if(el.article_title.toLowerCase().includes(value.toLowerCase())) return true 
        })
        props.SetArticles(newArr);
    }
    
    const [searchText, SetSearchText] = useState();
    
    return(
        <div className="header">
            <Link to="/" id="logo"><h1>проф<br/>ресурс</h1></Link>

            <div className="search">
                <img src={searchImg} alt="not found"/>
                <input type="text" id="filter" onChange={e => SetFilter(e.target.value)} placeholder="найти" value={searchText} />
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
        articles: state.Articles.articles,
    }
}

function MapDispatchToProps(dispatch){
    return{
        ChangeAuthorized: (value) => dispatch(setAuthorisedActionCreator(value)),
        SetArticles: (record) => dispatch(setArticleActionCreator(record))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Header)
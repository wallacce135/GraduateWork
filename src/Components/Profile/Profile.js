import React, { useEffect } from "react";
import './Profile.css'
import Container from "../Container/Container";
import { connect } from "react-redux";
import { getCurrentUserActionCreator } from "../Registration/UsersReducer";
import Cookies from 'js-cookie';
import axios from "axios";
import { setArticleActionCreator } from "../Article/ArticleReducer";
import {Modal} from 'antd';
// import 'antd/dist/antd.css';

function Profile(props){
    
    
    function getUser(){
        axios.get('http://localhost:8080/getUserForProfile',{
            params:{
                user_id: Cookies.get('user_id')
            }
        }).then(res =>{
            props.GetCurrentUser(res.data[0]);
        })
    }

    function getArticles(){
        axios.get('http://localhost:8080/getUserArticle', {
            params:{
                user_id: Cookies.get('user_id')
            }
        }).then(res =>{
            props.SetArticles(res.data);
        })
    }

    function openModalEdit(){
        <Modal />
    }

    useEffect(() => getUser(), []);
    useEffect(() => getArticles(), []);

    return(
        <div className="Profile">
            <div className="main_info">
                <div className="main_top">
                    <div className="img">
                        <div className="user_icon" />
                    </div>
                    <h2>{props.currentUser ? props.currentUser.user_login : ""}</h2>
                    {(props.currentUser.user_name) ? 
                    (<h3>{props.currentUser.user_surname + " " + props.currentUser.user_name}</h3>) : "" }
                </div>
                <div className="main_bottom">
                    <button className="edit_profile" onClick={() => openModalEdit()}>Редактировать профиль</button>
                </div>
            </div>

            <div className="grid-container">
                {props.articles.map(art =>{ 
                    return <Container key={art.article_id} forprop_key={art.article_id} title={art.article_title} />
                })}
            </div>

        </div>
    )
}

function MapStateToProps(state){
    return{
        currentUser: state.Users.currentUser,
        articles: state.Articles.articles
    }
}

function MapDispatchToProps(dispatch){
    return{
        SetArticles: (record) => dispatch(setArticleActionCreator(record)),
        GetCurrentUser: (user) => dispatch(getCurrentUserActionCreator(user))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(Profile)
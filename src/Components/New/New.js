import React, { useState } from "react";
import { connect } from 'react-redux';
import { setNewArticleActionCreator } from "../Article/ArticleReducer";
import Cookies from 'js-cookie';
import axios from "axios";
import './New.css'
import { useNavigate } from "react-router-dom";


function addNew(_payload, props, navigate){
    
    props.AddNewArticle(_payload);

    console.log(props);

    axios.post("http://localhost:8080/uploadNewArticle", {
         payload: props.state.Articles.articles[props.state.Articles.articles.length - 1]
    })
    navigate('/');
}

function addImage(event){
    
}

function New(props){
    const [textValue, changeTextValue] = useState("");
    const [titleValue, changeTitleValue] = useState("");

    const navigate = useNavigate();
    
    return(
        <div className="New">
            <input id="title" placeholder="Заголовок" onChange={e => changeTitleValue(e.target.value)}/>
            <textarea id="text" onChange={e => changeTextValue(e.target.value)}></textarea>
            <div className="buttons">
                <input type="file" id="addImg" onClick={e => addImage(e.target.value)} placeholder="Добавить картинку" />
                <button id="Publish" onClick={() => (addNew({payload: {artTitle: titleValue, artText: textValue, user_id: Cookies.get('user_id')}}, props, navigate))}>Опубликовать</button>
            </div>
        </div>

    )
}


function MapStateToProps(state){
    return{
        articles: state.Articles.articles,
        state: state
    }
}

function MapDispatchToProps(dispatch){
    return{
        AddNewArticle: (payload) => dispatch(setNewArticleActionCreator(payload))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(New)
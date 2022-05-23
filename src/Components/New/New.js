import React, { useState } from "react";
import { connect } from 'react-redux';
import { setNewArticleActionCreator } from "../Article/ArticleReducer";
import Cookies from 'js-cookie';
import axios from "axios";
import './New.css'


function addNew(_payload, props){
    
    props.AddNewArticle(_payload);

    console.log(props);

    axios.post("http://localhost:8080/uploadNewArticle", {
         payload: props.state.Articles.articles[props.state.Articles.articles.length - 1]
    })
    
}

function New(props){

    const [textValue, changeTextValue] = useState("");
    const [titleValue, changeTitleValue] = useState("");

    return(
        <div className="New">
            <input id="title" placeholder="Заголовок" onChange={e => changeTitleValue(e.target.value)}/>
            <textarea id="text" onChange={e => changeTextValue(e.target.value)}></textarea>
            <div className="buttons">
                <button id="addImg">Установить картинку</button>
                <button id="Publish" onClick={() => (addNew({payload: {artTitle: titleValue, artText: textValue, user_id: Cookies.get('user_id')}}, props))}>Опубликовать</button>
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
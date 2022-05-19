import React, { useState } from "react";
import './New.css'
import { connect } from 'react-redux';
import { setNewArticleActionCreator } from "../Article/ArticleReducer";
import axios from "axios";


function addNew(payload){
    
    // console.log(payload);

    // axios.post("http://localhost:8080/uploadNewArticle", {
        
    // })
    
}

function New(props){

    const [value, changeValue] = useState("");

    const [textValue, changeTextValue] = useState("");
    const [titleValue, changeTitleValue] = useState("");

    console.log(props.state);


    return(
        <div className="New">
            <input id="title" placeholder="Заголовок" onChange={e => changeTitleValue(e.target.value)}/>
            <textarea id="text" onChange={e => changeTextValue(e.target.value)}></textarea>
            <div className="buttons">
                <button id="addImg">Установить картинку</button>
                <button id="Publish" onClick={() => (props.AddNewArticle({payload: {artTitle: titleValue, artText: textValue}}))}>Опубликовать</button>
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
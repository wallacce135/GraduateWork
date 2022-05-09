import React, { useState } from "react";
import './New.css'
import TextareaContainer from "./TextArea/TextareaContainer";
import { connect } from 'react-redux';
import { setNewArticleActionCreator } from "../Article/ArticleReducer";
import axios from "axios";


function addNewArticle (titleValue, textValue){
    
    let payload = {
        titleText: titleValue,
        textValue: textValue
    }

    addNewArticle(payload);

    // axios.post("http://localhost:8080/uploadNewArticle", {
        
    // })
    
}

function New(props){

    const [value, changeValue] = useState("");

    const [textValue, changeTextValue] = useState("");
    const [titleValue, changeTitleValue] = useState("");

    console.log(props)

    return(
        <div className="New">
            <input id="title" placeholder="Заголовок" onChange={e => changeTitleValue(e.target.value)}/>
            {/* <TextareaContainer id="container" handler={(e) => changeValue(e.target.value)} value={value}/> */}
            <textarea id="text" onChange={e => changeTextValue(e.target.value)}></textarea>
            <div className="buttons">
                <button id="addImg">Установить картинку</button>
                <button id="Publish" onClick={() => addNewArticle(titleValue, textValue)}>Опубликовать</button>
            </div>
        </div>
    )
}


function MapStateToProps(state){
    return{
        articles: state.Articles.payload
    }
}

function MapDispatchToProps(dispatch){
    return{
        AddNewArticle: (payload) => dispatch(setNewArticleActionCreator(payload))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(New)
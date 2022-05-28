import React from "react"; 
import './Article.css'
import Container from "../Container/Container";
import Tip from "../Tip/Tip";
import axios from "axios";
import { connect } from "react-redux";
import { setArticleActionCreator, getTipActionCreator } from "./ArticleReducer";

import { useEffect } from "react";


function Article(props){

    const getData = () =>{

        axios.get('http://localhost:8080').then(res =>{
            props.setArticles(res.data);
        })
    }

    const getTip = () =>{
        axios.get('http://localhost:8080/tips').then(res =>{
            props.getTip(res.data[0]);
        })
    }

    useEffect(() => getData(), [props.articles.length]);
    useEffect(() => getTip(), [props.tip.tip_id]);
    
    return(
        <div className="article">
        
            <div className="grid-container">

                {props.articles.map(art =>{ 
                    return <Container key={art.article_id} forprop_key={art.article_id} title={art.article_title} />
                })}

                <button className="showMoreBtn">Показать больше</button>
            </div>
            <Tip title={props.tip.tip_title || "Здесь будет заголовок подсказки"} text={props.tip.tip_text}/>
        </div>
    )
}

function MapStateToProps(state){
    return{
        articles: state.Articles.articles,
        tip: state.Articles.tip
    }
}

function MapDispatchToProps(dispatch){
    return{
        setArticles: (record) => dispatch(setArticleActionCreator(record)),
        getTip: (tip) => dispatch(getTipActionCreator(tip))
    }
}



export default connect(MapStateToProps, MapDispatchToProps)(Article)
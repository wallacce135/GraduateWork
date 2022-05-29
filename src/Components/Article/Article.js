import React, { useState } from "react"; 
import './Article.css'
import Container from "../Container/Container";
import Tip from "../Tip/Tip";
import axios from "axios";
import { connect } from "react-redux";
import { setArticleActionCreator, getTipActionCreator, addArticlesActionCreator, changePageActionCreator } from "./ArticleReducer";
import { useEffect } from "react";


function Article(props){

    const getData = (page) =>{
        axios.get('http://localhost:8080', {
            params: {
                page: page
            }
        }).then(res =>{
            props.setArticles(res.data);
        })
    }

    const getTip = () =>{
        axios.get('http://localhost:8080/tips').then(res =>{
            props.getTip(res.data[0]);
        })
    }
    
    useEffect(() => getData(props.page), []);
    useEffect(() => getTip(), [props.tip.tip_id]);
    
    
    function nextPage(){
        axios.get('http://localhost:8080', {
            params: {
                page: props.page + 4
            }
        }).then(res =>{
            props.addArticles(res.data);
            props.changePage(props.page + 4);
        })
    }

    console.log(props.state);
    return(
        <div className="article">
        
            <div className="grid-container">

                {props.articles.map(art =>{ 
                    return <Container key={art.article_id} forprop_key={art.article_id} title={art.article_title} />
                })}

                <button className="showMoreBtn" onClick={() => nextPage()}>Показать больше</button>
            </div>
            <Tip title={props.tip.tip_title || "Здесь будет заголовок подсказки"} text={props.tip.tip_text}/>
        </div>
    )
}

function MapStateToProps(state){
    return{
        articles: state.Articles.articles,
        page: state.Articles.page,
        tip: state.Articles.tip,
        state: state
    }
}

function MapDispatchToProps(dispatch){
    return{
        setArticles: (record) => dispatch(setArticleActionCreator(record)),
        getTip: (tip) => dispatch(getTipActionCreator(tip)),
        changePage: (value) => dispatch(changePageActionCreator(value)),
        addArticles: (record) => dispatch(addArticlesActionCreator(record))
    }
}



export default connect(MapStateToProps, MapDispatchToProps)(Article)
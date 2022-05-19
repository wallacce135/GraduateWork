import React from "react";
import './ArticlePage.css'
import background from '../../assets/background.png';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { setArticleActionCreator } from "../Article/ArticleReducer";



const FindArticle = (props, params) =>{
    let data = null
    data = props.articles.filter(element => {
        if(String(element.article_id) === params.articleId){
            return true;
        }
    });
    return data ? data[0] : null;
}


function ArticlePage(props){

    const params = useParams();

    let data = FindArticle(props, params);
    console.log(data);

    return(
        <div className="ArtcilePage">
            <img className="background" src={background} />
            <div className="title">
                <h1>{data ? data.article_title : ""}</h1>
            </div>
            <div className="mainText">
                {data ? data.article_text : ""}
            </div>
        </div>
    )
}

function MapStateToProps(state){
    return{
        articles: state.Articles.articles
    }
}

function MapDispatchToProps(dispatch){
    return{
        setArticles: (record) => dispatch(setArticleActionCreator(record))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(ArticlePage);
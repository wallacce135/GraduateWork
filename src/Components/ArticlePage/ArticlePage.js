import React, { useEffect } from "react";
import background from '../../assets/background.png';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentCommentsActionCreator, setArticleActionCreator, setCurrentArtcileActionCreator } from "../Article/ArticleReducer";
import Comment from "./Comment/Comment";
import './ArticlePage.css'
import axios from "axios";




const FindArticle = (props, params) =>{
    axios.post('http://localhost:8080/getArticle', {
        article_id: params.articleId 
    })
    .then(art =>{
        if(art.data.length > 0){
            props.setCurrentArtcile(art.data);
        }
    })
}

const FindComments = (props, params) =>{
    axios.post('http://localhost:8080/getComments', {
        article_id: params.articleId
    }).then(res =>{
        if(res.data.length > 0){
            console.log(res.data);
            props.getComments(res.data);
        }
        else{
            props.getComments([]);
        }
    })
}

function ArticlePage(props){
    
    const params = useParams();
    useEffect(() => FindArticle(props, params), [props.state.Articles.currentArticle.length]);
    useEffect(() => FindComments(props, params), [props.state.Articles.currentComments.length]);

    return(
        <div className="ArtcilePage">
            <img className="background" src={background} />
            <div className="title">
                <h1>{props.state.Articles.currentArticle.length > 0 ? props.state.Articles.currentArticle[0].article_title : ""}</h1>
            </div>
            <div className="mainText">
            <p>{props.state.Articles.currentArticle.length > 0 ? props.state.Articles.currentArticle[0].article_text : ""}</p>
            </div>
            <div className="CommentsBlock">
                <div className="CommentsBlockTitle">
                    <h1>Комментарии</h1>
                    <div className="line" />
                </div>

                {props.currentComments.map((comm, index)  =>{
                    return <Comment key={index} user_id={comm.user_id} text={comm.comment_text} />
                })}

            </div>
        </div>
    )
}

function MapStateToProps(state){
    return{
        articles: state.Articles.articles,
        currentArticle: state.Articles.currentArticle,
        currentComments: state.Articles.currentComments,
        state: state
    }
}

function MapDispatchToProps(dispatch){
    return{
        setArticles: (record) => dispatch(setArticleActionCreator(record)),
        setCurrentArtcile: (record) => dispatch(setCurrentArtcileActionCreator(record)),
        getComments: (comments) => dispatch(getCurrentCommentsActionCreator(comments))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(ArticlePage);
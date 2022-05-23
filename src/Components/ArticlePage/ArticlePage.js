import React, { useEffect, useState } from "react";
import background from '../../assets/background.png';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentCommentsActionCreator, setArticleActionCreator, setCurrentArtcileActionCreator, setNewCommentActionCreator } from "../Article/ArticleReducer";
import Comment from "./Comment/Comment";
import Cookies  from "js-cookie";
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
    
    axios.get(`http://localhost:8080/getComments`, {
        params: {
            article_id: params.articleId
        }
    }).then(res =>{
        props.getComments(res.data);
    });
    console.log(1);
}

function PostComment(event, comment, props, params)
{
    props.setNewComment(comment);
    axios.post('http://localhost:8080/newComment', {
        comment: comment,
        article_id: params.articleId
    })
    event.preventDefault();
}


function ArticlePage(props){
    
    const params = useParams();
    useEffect(() => FindArticle(props, params), [props.currentArticle.length]);
    useEffect(() => FindComments(props, params), []);
    
    const [commentText, SetCommentText] = useState('');

    return(
        <div className="ArtcilePage">
            <img className="background" src={background} />
            <div className="title">
                <h1>{props.currentArticle.length > 0 ? props.currentArticle[0].article_title : ""}</h1>
            </div>
            <div className="mainText">
            <p>{props.currentArticle.length > 0 ? props.currentArticle[0].article_text : ""}</p>
            </div>
            <div className="CommentsBlock">
                <div className="CommentsBlockTitle">
                    <h1>Комментарии</h1>
                    <div className="line" />
                </div>

                {props.currentComments.length ? 
                props.currentComments.map((comment, index) => { return <Comment key={index} user_login={props.currentComments[index].user_login} text={props.currentComments[index].comment_text} /> }) 
                : (<div className="NoComments"><h2>Здесь ещё нет комментариев, будьте первым!</h2></div>)}


                <h2 id="newCommentBlock">Написать новый комментарий</h2>
                <form className="commentForm">
                    <textarea id="commentText" onChange={e => SetCommentText(e.target.value)} value={commentText}/>
                    <button id="publishComment" onClick={event => PostComment(event, {comment_text: commentText, user_login: Cookies.get('login'), user_id: Cookies.get('user_id')}, props, params)}>Отправить</button>
                </form>
            </div>
            

        </div>
    )
}

function MapStateToProps(state){
    return{
        articles: state.Articles.articles,
        currentArticle: state.Articles.currentArticle,
        currentComments: state.Articles.currentComments,
    }
}

function MapDispatchToProps(dispatch){
    return{
        setNewComment: (payload) => dispatch(setNewCommentActionCreator(payload)),
        setArticles: (record) => dispatch(setArticleActionCreator(record)),
        setCurrentArtcile: (record) => dispatch(setCurrentArtcileActionCreator(record)),
        getComments: (comments) => dispatch(getCurrentCommentsActionCreator(comments))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(ArticlePage);
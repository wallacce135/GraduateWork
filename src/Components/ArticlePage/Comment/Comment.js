import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentUserActionCreator } from "../../Registration/UsersReducer";
import './Comment.css';

function getUser(props){
    axios.post('http://localhost:8080/getCurrentUser', {
        user_id: props.user_id
    }).then(res =>{
        props.getCurrentUser(res.data[0]);
    })
}


function Comment(props){

    useEffect(() => getUser(props), [props.state.Users.currentUser.user_id]);

    return(
        <div className="Comment">
            <div className="CommentTitle">
                <div className="userImg"></div>
                <h2>{props.state.Users.currentUser.user_login ? props.state.Users.currentUser.user_login : ""}</h2>
            </div>
            <div className="CommentText">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

function MapStateToProps(state){
    return{
        currUsername: state.Users.currentUser,
        state: state
    }
}

function MapDispatchToProps(dispatch){
    return{
        getCurrentUser: (user) => dispatch(getCurrentUserActionCreator(user))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Comment)
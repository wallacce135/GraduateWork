import React from "react";
import { connect } from "react-redux";
import { getCurrentUserActionCreator } from "../../Registration/UsersReducer";
import './Comment.css';


function Comment(props){

    return(
        <div className="Comment">
            <div className="CommentTitle">
                <div className="userImg"></div>
                <h2>{props.user_login}</h2>
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
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getUsersActionCreator, setAuthorisedActionCreator } from "../Registration/UsersReducer";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './Login.css';


function Login(props){

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getUserData = (_login, _password, props) =>{
        axios.post('http://localhost:8080/login', {
            login: _login,
            password: _password
        })
        .then(data =>{
            if(data.data.length > 0){
                props.setUser(data.data);
                Cookies.set('login', _login);
                Cookies.set('user_id', data.data[0].user_id);
                Cookies.set('loggined', true);
                props.ChangeAuthorised(true);
            }
            //Сделать pop-up
        })
        .catch(function (err){
            console.log(err);
        })
        navigate('/');
    }

    return(
        <div className="Login">
            <form className="loginForm">
                <h1>Войти</h1>
                <input type="text" id="email" placeholder="Логин" onChange={e => setLogin(e.target.value)} value={login} />
                <input type="text" id="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} value={password} />
                <button onClick={event => getUserData(login, password, props)}>Отправить</button>
            </form>
        </div>
    )
}


function MapStateToProps(state){
    return{
        users: state.Users.users,
        state: state
    }
}

function MapDispatchToProps(dispatch){
    return{
        setUser: (record) => dispatch(getUsersActionCreator(record)),
        ChangeAuthorised: (value) => dispatch(setAuthorisedActionCreator(value))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)
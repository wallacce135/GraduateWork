import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import './Registration.css';
import { setAuthorisedActionCreator, setNewUserActionCreator } from "./UsersReducer";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


function Registration(props){
    
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const setNewUserMethod = (event, _email, _login, _password, _passwordAgain, props, _navigate) => {
        if(_password === _passwordAgain){
            Cookies.set('loggined', true)
            props.setNewUser({Email: _email, Login: _login, Password: _password});
            axios.post('http://localhost:8080/newUser', {
                user: props.state.Users.users[props.state.Users.users.length - 1]
            }).catch(function (err){
                console.log(`Что-то пошло не так: ${err}`);
            })
            props.ChangeAuthorised(true);
        }
        _navigate('/');
    }

    return(
        <div className="Registration">
            <form className="regForm">
                <h1>Зарегистрироваться</h1>
                <input type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
                <input type="text" id="login" placeholder="Логин" onChange={e => setLogin(e.target.value)} value={login}/>
                <input type="text" id="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} value={password}/>
                <input type="text" id="password_again" placeholder="Повторите пароль" onChange={e => setPasswordAgain(e.target.value)} value={passwordAgain}/>
                <button onClick={event => setNewUserMethod(event, email, login, password, passwordAgain, props, navigate)}>Отправить</button>
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
        setNewUser: (payloadUser) => dispatch(setNewUserActionCreator(payloadUser)),
        ChangeAuthorised: (value) => dispatch(setAuthorisedActionCreator(value))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(Registration)
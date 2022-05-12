import React, { useEffect } from "react";
import './Login.css'

function Login(){
    return(
        <div className="Login">
            <div className="main_login_container">
                <div className="left_side">
                    <h1>проф<br/>ресурс</h1>
                </div>
                <div className="right_side">
                    <form className="loginForm">
                        <h1>Авторизация</h1>
                        <input id="loginInput" type="text" placeholder="Эл. почта" />
                        <input id="passwordInput" type="text" placeholder="Пароль" />
                        <input id="sendSubmit" type="submit" value="Войти" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
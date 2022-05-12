import React, { useEffect } from "react";
import './Registration.css';


function Registration(){

    return(
        <div className="Registration">
            <div className="main_registation_container">
                <div className="left_side">
                    <h1>проф<br/>ресурс</h1>
                </div>
                <div className="right_side">
                    <form className="registrationForm">
                        <h1>Регистрация</h1>
                        <input type="text" placeholder="Эл. почта" />
                        <input type="text" placeholder="Имя" />
                        <input type="text" placeholder="Пароль" />
                        <input type="text" placeholder="Повторите пароль" />
                        <input id="sendSubmit" type="submit" value="Зарегистрироваться"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
import React from "react";
import './Navigation.css'
import {Link} from 'react-router-dom'


function Navigation(props){
    return(
        <div className="navigation">
            <Link id="articles" to="/">статьи</Link>
            {JSON.parse(props.auth) ? (
                <div>
                    <Link id="newArticle" to="/New">написать статью</Link>
                    <Link id="profile" to="/profile">профиль</Link>
                </div>
            ) : ""}
            

        </div>
    )
}

export default Navigation
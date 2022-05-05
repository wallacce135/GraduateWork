import React from "react";
import './Navigation.css'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div className="navigation">
            <Link id="articles" to="/">статьи</Link>
            <Link id="views" to="/views">обзоры</Link>
            <Link id="newArticle" to="/New">написать статью</Link>
        </div>
    )
}

export default Navigation
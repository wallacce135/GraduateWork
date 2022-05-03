import React from "react";
import './Navigation.css'

function Navigation(){
    return(
        <div className="navigation">
            <a id="articles" href="/">статьи</a>
            <a id="views" href="/views">обзоры</a>
            <a id="newArticle" href="/New">написать статью</a>
        </div>
    )
}

export default Navigation
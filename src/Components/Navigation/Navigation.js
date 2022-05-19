import React from "react";
import './Navigation.css'
import {Link} from 'react-router-dom'

function Navigation(props){
    console.log(props);
    return(
        <div className="navigation">
            <Link id="articles" to="/">статьи</Link>
            {JSON.parse(props.auth) ? (
                <Link id="newArticle" to="/New">написать статью</Link>
            ) : ""}
            
        </div>
    )
}

export default Navigation
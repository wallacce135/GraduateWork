import React from "react";
import './Container.css'
import { Link } from 'react-router-dom';

function Container(props){
    return(
        <div className="container">
            <div className="image" />
            <Link to={`/articles/${props.forprop_key}`}><label className="container-title">{props.title}</label></Link>
        </div>
    )
}

export default Container
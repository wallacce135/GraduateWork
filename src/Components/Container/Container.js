import React from "react";
import './Container.css'
import { Link } from 'react-router-dom';
import background from '../../assets/background3.png';




function Container(props){
    return(
        <div className="container">
            <div className="image" style={{background: `url(${background})`}}/>
            <Link to={`/articles/${props.forprop_key}`}><label className="container-title">{props.title}</label></Link>
        </div>
    )
}

export default Container
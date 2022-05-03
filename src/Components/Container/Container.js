import React from "react";
import './Container.css'

function Container(props){
    return(
        <div className="container">
            <div className="image"/>
            <label className="container-title">{props.title}</label>
        </div>
    )
}

export default Container
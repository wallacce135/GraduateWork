import React from "react";
import './Container.css'
import { Link } from 'react-router-dom';
import background from '../../assets/background3.png';
import background1 from '../../assets/background1.png';
import background2 from '../../assets/background2.png';



function Container(props){
    let backArr = [background, background1, background2];
    // console.log(backArr[2]);
    let rand = Math.floor(Math.random() * backArr.length);
    return(
        <div className="container">
            <div className="image" style={{background: `url(${backArr[rand]})`}}/>
            <Link to={`/articles/${props.forprop_key}`}><label className="container-title">{props.title}</label></Link>
        </div>
    )
}

export default Container
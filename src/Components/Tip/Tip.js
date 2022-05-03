import React from "react";
import './Tip.css'
import idea from '../../assets/idea.svg';

function Tip(props){
    return(
        <div className="tip">
            <div className="tip_header">
                <div className="icon">
                    <img src={idea} />
                </div>
                <h2>подсказка дня!</h2>
            </div>

            <div className="mainBlock">
                    <div className="mainBlock_title">{props.title}</div>
                    <div className="mainBlock_text">{props.text}</div>
                </div>
        </div>
    )
}

export default Tip
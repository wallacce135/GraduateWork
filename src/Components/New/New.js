import React, { useState } from "react";
import './New.css'
import TextareaContainer from "./TextArea/TextareaContainer";


function New(){

    const [value, changeValue] = useState("");

    return(
        <div className="New">
            <input placeholder="Заголовок" />
            <TextareaContainer handler={(e) => changeValue(e.target.value)} value={value}/>
            <div className="buttons">
                <button id="addImg">Установить картинку</button>
                <button id="Publish">Опубликовать</button>
            </div>
        </div>
    )
}

export default New
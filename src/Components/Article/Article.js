import React from "react"; 
import './Article.css'
import Container from "../Container/Container";
import Tip from "../Tip/Tip";

function Article(props){
    return(
        <div className="article">
        
            <div className="grid-container">

                <Container title="Some text на русском или английском, как сам захочешь то и будешь писать " />

                <Container title="Some text на русском или английском, как сам захочешь то и будешь писать"/>

                <Container title="Купи араба - заплати еврею"/>

                <Container title="Some text на русском или английском, как сам захочешь то и будешь писать"/>

                <button className="showMoreBtn">Показать больше</button>

            </div>
            
            <Tip title="Title" text="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот."/>
        </div>
    )
}

export default Article
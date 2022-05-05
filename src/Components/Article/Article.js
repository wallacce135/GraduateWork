import React from "react"; 
import './Article.css'
import Container from "../Container/Container";
import Tip from "../Tip/Tip";

function Article(props){
    return(
        <div className="article">
        
            <div className="grid-container">

                <Container title="Наследование прав доступа" />

                <Container title="Общение с пользователями, анализ конкурентов и взгляд со стороны"/>

                <Container title="Руководство по модулю клавиатуры Python"/>

                <Container title="В WhatsApp добавили реакции на сообщения"/>

                <button className="showMoreBtn">Показать больше</button>

            </div>
            
            <Tip title="Привыкнув к лучшему с трудом переходишь на хорошее." text="После написания всего кода, блок можно стереть. А если поставить комментарий ПОТОМ УДАЛИТЬ!!!, то в последствии блок для удаления легко найти поиском по !!!. Основная прелесть способа в том, что даже если забыть его потом удалить - ничего страшного (кроме недоумения того, кто не знает) не произойдёт."/>
        </div>
    )
}

export default Article
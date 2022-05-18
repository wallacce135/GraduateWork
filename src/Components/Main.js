import React from "react";
import {Route, Routes} from 'react-router-dom';
import './Main.css';
import Cookies from 'js-cookie';
import Header from "./Header/Header"
import Navigation from './Navigation/Navigation';
import Article from './Article/Article';
import Footer from './Footer/Footer';
import New from './New/New';
import Views from './Views/Views';
import Login from './Login/Login';
import Registration from './Registration/Registration';


function Main(props){
    return(
        <div className="Main">
            <Header auth={props.auth}/>
            <Navigation />

            <Routes>
                <Route path='/' element={<Article />} />
                <Route path='/new' element={<New />} />
                <Route path='/views' element={<Views />} />
                <Route path='/login'  element={<Login />} />
                <Route path='/registration' element={<Registration />}/>
            </Routes>

            <Footer />
        </div>
    )
}

export default Main

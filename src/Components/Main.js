import React from "react";
import {Route, Routes} from 'react-router-dom';
import './Main.css';
import Header from "./Header/Header"
import Navigation from './Navigation/Navigation';
import Article from './Article/Article';
import Footer from './Footer/Footer';
import New from './New/New';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import ArticlePage from "./ArticlePage/ArticlePage";
import Profile from "./Profile/Profile";


function Main(props){
    return(
        <div className="Main">
            <Header auth={props.auth} />
            <Navigation auth={props.auth} />

            <Routes>
                <Route path='/' element={<Article />} />
                <Route path='/new' element={<New />} />
                <Route path='/login'  element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route exact path='/articles/:articleId' element={<ArticlePage/>} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default Main

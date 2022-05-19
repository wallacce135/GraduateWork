import './App.css';
import Cookies from 'js-cookie';
import Main from './Components/Main';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setAuthorisedActionCreator } from "./Components/Registration/UsersReducer";

function App(props) {
  if(!Cookies.get('loggined')){
    Cookies.set('loggined', false);
    props.ChangeAuthorised(false);
  }
  else if(JSON.parse(Cookies.get('loggined')) === true){
    props.ChangeAuthorised(true);
  }

  return(
    <Main auth={props.authorized} />
  )
}

function MapStateToProps(state){
  return{
      authorized: state.Users.authorized
  }
}

const MapDispatchToProps = dispatch => ({ChangeAuthorised: (value) => dispatch(setAuthorisedActionCreator(value))})

export default connect(MapStateToProps, MapDispatchToProps)(App);

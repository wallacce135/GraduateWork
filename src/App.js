import './App.css';
import Cookies from 'js-cookie';
import Main from './Components/Main';
import { connect } from 'react-redux';
import { setAuthorisedActionCreator } from "./Components/Registration/UsersReducer";


function App(props) {
  if(!Cookies.get('loggined')){
    Cookies.set('loggined', false);
    Cookies.set('login', null);
    props.ChangeAuthorised(false);
  }
  else if(JSON.parse(Cookies.get('loggined')) === true){
    props.ChangeAuthorised(true);
  }

  if(!Cookies.get('user_id')){
    Cookies.set('user_id', null);
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

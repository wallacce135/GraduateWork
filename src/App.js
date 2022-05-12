import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from "./Components/Header/Header"
import Navigation from './Components/Navigation/Navigation';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import New from './Components/New/New';
import Views from './Components/Views/Views';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  
  Cookies.set('loggined', true);
  
  const [authorized, setAuthorized] = useState(false);
  
  
  useEffect(() => {
    if(Cookies.get('loggined')){
      setAuthorized(Cookies.get('loggined'));
    }
  }, [authorized])
  
  return (
    <div className="App">

      <Header authorized={authorized}/>
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
  );
}

export default App;

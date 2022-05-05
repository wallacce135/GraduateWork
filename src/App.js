import './App.css';
import {Route, Routes} from 'react-router-dom'

import Header from "./Components/Header/Header"
import Navigation from './Components/Navigation/Navigation';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import New from './Components/New/New';
import Views from './Components/Views/Views';

function App() {
  return (
    <div className="App">
      <Header />

      <Navigation />

      <Routes>
        <Route path='/' element={<Article />} />
        <Route path='/New' element={<New />} />
        <Route path='/Views' element={<Views/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

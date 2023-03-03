import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import Drinks_API from './components/drinksAPI';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
            <Route path='/' element={<Drinks_API/>} />
          </Routes>
        </Router>
    </div>
  );
}
 

export default App;

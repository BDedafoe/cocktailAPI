import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import DrinksAPI from './components/drinksAPI';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
            <Route path='/' element={<DrinksAPI/>} />
          </Routes>
        </Router>
    </div>
  );
}
 

export default App;

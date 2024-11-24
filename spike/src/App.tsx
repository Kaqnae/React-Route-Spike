import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}


export default App

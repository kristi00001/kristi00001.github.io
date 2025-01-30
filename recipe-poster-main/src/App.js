import './App.css';
import Register from './client/auth/Register';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import GuardedRoute from './GuardedRoute';
import Login from './client/auth/Login';
import {UserProvider} from "/Users/jonakapaj/recipiepublisher/recipie/src/user/UserContext.js";



function App() {
  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/homepage" element={<GuardedRoute>
            <Home/>
        </GuardedRoute>}/>
    </Routes>
</BrowserRouter>
</UserProvider>

  );
}

export default App;

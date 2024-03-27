import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.tsx';
import Root from './Pages/Root.tsx';
import Signup from './Pages/Signup.tsx';
import Select from './Pages/Login_or_Siginup.tsx';
import Signup2 from './Pages/Signup2.tsx';  
import Home from './Pages/Home.tsx';
import RealHome from './Pages/realHome.tsx';  

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/save2" element={<Signup2 />} />
        <Route path="/user/save" element={<Signup />} />
        <Route path="/user" element={<Select />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/home" element={<RealHome />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.tsx';
import Root from './Pages/Root.tsx';
import Signup from './Pages/Signup.tsx';
import Select from './Pages/Login_or_Siginup.tsx';
import Signup2 from './Pages/Signup2.tsx';  
import RealHome from './Pages/realHome.tsx';
import Signup3 from './Pages/Singup3.tsx';
import Avatar from './Pages/Avatar.tsx';
import Diary from './Pages/Diary.tsx';
import DiaryWirte from './Pages/DiaryWirte.tsx';
import Diarycontent from './Pages/Diarycontent.tsx';
import DiaryList from './Pages/DiaryList.tsx';
import Mypage from './Pages/Mypage.tsx';
import Realmypage from './Pages/Realmypage.tsx';
import ByeWebsiste from './Pages/ByeWebsite.tsx';
import Mydiary from './Pages/Mydiary.tsx';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/save2" element={<Signup2 />} />
        <Route path="/user/save" element={<Signup />} />
        <Route path="/user/save3" element={<Signup3 />} />
        <Route path="/user" element={<Select />} />
        <Route path="/user/home" element={<RealHome />} />
        <Route path="/avatar/check" element={<Avatar />} />  
        <Route path="/diary/finalAll" element={<Diary />} />
        <Route path="/diary/list/:date/diary/save"  element={<DiaryWirte />} />
        <Route path="/diary/:date/:diaryId/findByuserAndDate" element={<Diarycontent />} />
        <Route path="/diary/list/:date" element={<DiaryList />} />
        <Route path="/user/info" element={<Mypage />} />
        <Route path="/user/info/real" element={<Realmypage />} />
        <Route path="/user/bye" element={<ByeWebsiste />} />
        <Route path="/diary/mydiary" element={<Mydiary />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
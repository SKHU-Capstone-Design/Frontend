// 완성본 아님
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/DiaryList.less';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import DiaryTable from '../Pages/DiarylistComponent/DairyTable'; 

interface DiaryPost {
  diaryId: number;
  title: string;
}

function DiaryList() {
  const location = useLocation();
  const [storedPosts, setStoredPosts] = useState<DiaryPost[]>([]);

  const getDateFromUrl = () => {
    const pathArr = location.pathname.split('/');
    return pathArr[pathArr.length - 1]; 
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const date = getDateFromUrl();

    axios.get(`http://localhost:8080/diary/list?date=${date}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        const postsWithId = response.data.map((post: any) => ({
          diaryId: post.diaryId,
          title: post.title
        }));
        setStoredPosts(postsWithId);
      })
      .catch(error => console.error('데이터를 불러오는 동안 오류가 발생했습니다:', error));
  }, [location.pathname]);

  return (
    <div className="diary-container">
      <Navbar />
      <DiaryTable storedPosts={storedPosts} location={location} />
    </div>
  );
}

export default DiaryList;

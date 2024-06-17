import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

// 다이어리 게시물의 인터페이스 정의
interface DiaryPost {
  diaryId: number;
  title: string;
}

// DiaryTable 컴포넌트의 Props 인터페이스 정의
interface DiaryTableProps {
  storedPosts: DiaryPost[];
  location: any;
}

// DiaryTable 컴포넌트 정의
function DiaryTable({ storedPosts, location }: DiaryTableProps) {
  return (
    <div className="diary-table-wrap">
      <table className='diarylist-table'>
        <thead>
          <tr>
            <th className="diary-table-header">No</th>
            <th className="diary-table-header">Title</th>
          </tr>
        </thead>
        <tbody>
          {storedPosts.map((post, index) => (
            <DiaryTableRow key={index} post={post} location={location} />
          ))}
        </tbody>
      </table>
      <div className='diary-write-btn'>
        <Link to={`${location.pathname}/diary/save`}>
          <button className="diary-write-button">글 작성</button>
        </Link>
      </div>
    </div>
  );
}

// DiaryTableRow 컴포넌트의 Props 인터페이스 정의
interface DiaryTableRowProps {
  post: DiaryPost;
  location: any;
}

// DiaryTableRow 컴포넌트 정의
function DiaryTableRow({ post, location }: DiaryTableRowProps) {
  return (
    <tr className="diary-table-row">
      <td className="diary-table-data">{post.diaryId}</td>
      <td className="diary-table-data">
        <Link to={`${location.pathname}/diary/${post.diaryId}`} className="boardTextLink">
          {post.title}
        </Link>
      </td>
    </tr>
  );
}

// DiaryList 컴포넌트 정의
function DiaryList() {
  const location = useLocation();
  const [storedPosts, setStoredPosts] = useState<DiaryPost[]>([]);

  const getDateFromUrl = () => {
    const pathArr = location.pathname.split('/');
    return pathArr[pathArr.length - 1]; 
  };

  useEffect(() => {
    const fetchDiariesByDate = async () => {
      try {
        const date = getDateFromUrl();
        const response = await axios.get(`http://localhost:5173/diary/list/${date}`);
        setStoredPosts(response.data);
      } catch (error) {
        console.error('다이어리 목록을 불러오는 중 에러 발생:', error);
      }
    };

    fetchDiariesByDate();
  }, [location.pathname]);

  return (
    <div className="diary-container">
      <h1>다이어리 목록</h1>
      <DiaryTable storedPosts={storedPosts} location={location} />
    </div>
  );
}

export default DiaryList;

// 완성본 아님
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/DiaryList.less';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';

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
    const fetchDiariesByDate = async () => {
      try {
        const date = getDateFromUrl();
        const response = await axios.get(`http://54.226.75.10:8080/diary/findByUserAndDate?date=${date}`);
        if (Array.isArray(response.data)) {
          const postsWithId = response.data.map((post: any) => ({
            diaryId: post.diaryId,
            title: post.title
          }));
          setStoredPosts(postsWithId);
        } else {
          console.error('데이터가 배열 형태가 아닙니다:', response.data);
          setStoredPosts([]); // 형식이 예상과 다르면 빈 배열로 처리
        }
      } catch (error) {
        console.error('다이어리 목록을 불러오는 중 에러 발생:', error);
        setStoredPosts([]); // 에러 발생 시 빈 배열로 처리
      }
    };

    fetchDiariesByDate();
  }, [location.pathname]);

  return (
    <div className="diary-container">
      <Navbar />
      <DiaryTable storedPosts={storedPosts} location={location} />
    </div>
  );
}

interface DiaryTableProps {
  storedPosts: DiaryPost[];
  location: any;
}

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

interface DiaryTableRowProps {
  post: DiaryPost;
  location: any;
}

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

export default DiaryList;

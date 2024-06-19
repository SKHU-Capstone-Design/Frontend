import { useState, useEffect } from 'react';
import '../Styles/DiaryList.less';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'; 

interface DiaryPost {
  No: string;
  title: string;
}

function Mydiary() {
  const location = useLocation();
  const [storedPosts, setStoredPosts] = useState<DiaryPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1); 

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token is missing. Please log in again.');
        }

        const response = await axios.get(`http://34.239.189.147:8080/diary/list?page=${page}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        if (response.status !== 200) {
          if (response.status === 401) {
            localStorage.removeItem('accessToken');
            throw new Error('Unauthorized: Please log in again.');
          }
          throw new Error('Failed to fetch diaries.');
        }

        const data = response.data;
        const titlesOnly = data.map((diary: DiaryPost) => ({
          No: diary.No,
          title: diary.title
        }));
        setStoredPosts(titlesOnly);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        console.error('Failed to fetch diary data:', error);
      }
    };

    fetchDiaries();
  }, [page, location.pathname]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="diary-container">
      <Navbar />
      {error && (
        <div className="error-message">
          {error === 'Unauthorized: Please log in again.' ? (
            <Link to="/login">로그인 페이지로 이동</Link>
          ) : (
            error
          )}
        </div>
      )}
      <DiaryTable storedPosts={storedPosts} />
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>이전 페이지</button>
        <span>페이지 {page}</span>
        <button onClick={handleNextPage}>다음 페이지</button>
      </div>
    </div>
  );
}

function DiaryTable({ storedPosts }: { storedPosts: DiaryPost[] }) {
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
            <DiaryTableRow key={index} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DiaryTableRow({ post }: { post: DiaryPost }) {
  return (
    <tr className="diary-table-row">
      <td className="diary-table-data">{post.No}</td>
      <td className="diary-table-data">{post.title}</td>
    </tr>
  );
}

export default Mydiary;

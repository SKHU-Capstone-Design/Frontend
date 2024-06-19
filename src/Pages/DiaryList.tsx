import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../Styles/DiaryList.less';

interface DiaryPost {
  diaryId: string;
  title: string;
  body: string;
  date: string;
}

function DiaryList() {
  const { date: diaryDate } = useParams<{ date: string }>();
  const [storedPosts, setStoredPosts] = useState<DiaryPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiariesByDate = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token is missing');
        }

        const response = await axios.get('http://34.239.189.147:8080/diary/findByUserAndDate', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          params: { date: diaryDate }
        });

        if (response.status === 200) {
          setStoredPosts(response.data);
          setError(null);
        } else {
          throw new Error('서버로부터 응답이 유효하지 않습니다.');
        }
      } catch (error) {
        console.error('데이터를 불러오는 동안 오류가 발생했습니다:', error);
        setError('글을 작성해주세요');
      }
    };

    if (diaryDate) {
      fetchDiariesByDate();
    }
  }, [diaryDate]);

  return (
    <div className="diary-container">
      <Navbar />
      {error && <div className="error-message">{error}</div>}
      <DiaryTable storedPosts={storedPosts} date={diaryDate} />
    </div>
  );
}

interface DiaryTableProps {
  storedPosts: DiaryPost[];
  date: string | undefined;
}

function DiaryTable({ storedPosts, date }: DiaryTableProps) {
  return (
    <div className="diary-table-wrap">
      <table className='diarylist-table'>
        <thead>
          <tr>
            <th className="diary-table-header">Title</th>
            <th className="diary-table-header">Body</th>
            <th className="diary-table-header">Date</th>
          </tr>
        </thead>
        <tbody>
          {storedPosts.map((post, index) => (
            <DiaryTableRow key={index} post={post} />
          ))}
        </tbody>
      </table>
      <div className='diary-write-btn'>
        <Link to={`/diary/list/${date}/diary/save`}>
          <button className="diary-write-button">글 작성</button>
        </Link>
      </div>
    </div>
  );
}

interface DiaryTableRowProps {
  post: DiaryPost;
}

function stripHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function DiaryTableRow({ post }: DiaryTableRowProps) {
  return (
    <tr className="diary-table-row">
      <td className="diary-table-data">{post.title}</td>
      <td className="diary-table-data">{stripHtml(post.body)}</td>
      <td className="diary-table-data">{post.date}</td>
    </tr>
  );
}

export default DiaryList;

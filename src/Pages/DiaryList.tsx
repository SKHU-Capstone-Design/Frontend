import '../Styles/DiaryList.less';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';

function DiaryList() {
  const location = useLocation(); // 컴포넌트 내부에서 useLocation 호출

  const storedPosts = [
    { No: "1", title: "임시데이터" },
    { No: "2", title: "임시데이터" },
    { No: "3", title: "임시데이터" },
    { No: "4", title: "임시데이터" },
  ];

  return (
    <div className="diary-container"> 
      <Navbar />
      <DiaryTable storedPosts={storedPosts} location={location} />
    </div>
  );
}

function DiaryTable({ storedPosts, location }: { storedPosts: { No: string; title: string }[]; location: ReturnType<typeof useLocation> }) {
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
      <div className='diary-write-btn'>
        <Link to={`${location.pathname}/diary/save`}>
          <button className="diary-write-button">글 작성</button>
        </Link> 
      </div>   
    </div>
  );
}

function DiaryTableRow({ post }: { post: { No: string; title: string } }) {
  return (
    <tr className="diary-table-row"> 
      <td className="diary-table-data">{post.No}</td> 
      <td className="diary-table-data">{post.title}</td> 
    </tr>
  );
}

export default DiaryList;

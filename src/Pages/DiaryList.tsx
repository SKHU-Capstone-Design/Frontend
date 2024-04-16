import '../Styles/DiaryList.less';
import Navbar from './Navbar';

function Diary() {
  const storedPosts = [ // 임시 데이터. 나중에는 사용자가 서버에 저장한 게시글이 이 리스트에 들어갈 것
    { No: "1", title: "임시데이터" },
    { No: "2", title: "임시데이터" },
    { No: "3", title: "임시데이터" },
  ];

  return (
    <div className="diary-container"> 
      <Navbar />
      <DiaryTable storedPosts={storedPosts} />
    </div>
  );
}

function DiaryTable({ storedPosts }: { storedPosts: { No: string; title: string }[] }) {
  return (
    <div className="diary-table"> 
      <table>
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

function DiaryTableRow({ post }: { post: { No: string; title: string } }) {
  return (
    <tr className="diary-table-row"> 
      <td className="diary-table-data">{post.No}</td> 
      <td className="diary-table-data">{post.title}</td> 
    </tr>
  );
}

export default Diary;

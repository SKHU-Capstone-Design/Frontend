import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar';
import { GoChevronRight, GoPerson, GoSignOut, GoListUnordered } from 'react-icons/go';
import '../Styles/Mypage.less';

const MyPage = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/user/info/real');
  };


  const goToMyDiary = () => {
    navigate('/diary/mydiary');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/user/login');
  };

  return (
    <div>
      <NavBar />
      <div className="my-page-container">
        <div className="my-page-content">
          <div className="my-page-card" onClick={goToProfile}>
            <div className="my-page-text-navi">
              <GoPerson className="my-page-icon" />&nbsp;개인 정보
            </div>
            <GoChevronRight className="my-page-icon" />
          </div>
          <div className="my-page-card" onClick={goToMyDiary}>
            <div className="my-page-text-navi">
              <GoListUnordered className="my-page-icon" />&nbsp; 작성글 목록
            </div>
            <GoChevronRight className="my-page-icon" />
          </div>
          <div className="my-page-card" onClick={handleLogout}>
            <div className="my-page-text-navi">
              <GoSignOut className="my-page-icon" />&nbsp; 로그아웃
            </div>
            <GoChevronRight className="my-page-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

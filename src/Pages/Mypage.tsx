import { useNavigate } from 'react-router-dom';
import NavBar from './Navbar.tsx';
import { GoChevronRight, GoPerson, GoSignOut } from 'react-icons/go';
import '../Styles/Mypage.less';

const MyPage = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/user/info/real');
  };

  const goToRoutineReset = () => {
    navigate('/user/bye');
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
          <div className="my-page-card" onClick={goToRoutineReset}>
            <div className="my-page-text-navi">
              <GoSignOut className="my-page-icon" />&nbsp;회원탈퇴
            </div>
            <GoChevronRight className="my-page-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

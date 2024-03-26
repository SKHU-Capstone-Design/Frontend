/*import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 임포트
import "../Styles/Login.less";

function Login() {
  /*const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [loginActive, setLoginActive] = useState(false); // 로그인 버튼 활성화 상태를 관리하는 상태 추가

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUserId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    
    // 입력된 아이디와 비밀번호가 둘 다 있을 때 로그인 버튼 활성화
    if (userId !== '' && password !== '') {
      setLoginActive(true);
    } else {
      setLoginActive(false);
    }
  }

  const handleLogin = () => {
    navigate('/home'); 
  }

  return (
    <div className="loginwrap">
      <div className="maintxt"><p>capstone</p></div>
      <div className="gray-box">
        <div className='idbox'>
          <label>
            <input type="text" name="username" placeholder="아이디" value={userId} onChange={handleInputChange} />
          </label>
        </div>
        <div className='pwbox'>
          <label>
            <input type="password" name="password" placeholder="비밀번호" value={password} onChange={handleInputChange} />
          </label>
        </div>
        <div className='loginsave'>
          <label htmlFor="saveLogin">
            <input type="radio" id="saveLogin" name="loginOption" />
            간편로그인 정보 저장
          </label>
        </div>
        <button className={`loginbtn ${loginActive ? 'active' : ''}`} onClick={handleLogin}>로그인</button> {/* handleLogin 함수 호출 */}
       /* <div className="signup-link"> 
          <Link to="/user/save">회원가입</Link> 
        </div>
      </div>
    </div>  
  );
} 

export default Login;*/

import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "../Styles/Login.less";

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginActive, setLoginActive] = useState(false);

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUserId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    
    if (userId !== '' && password !== '') {
      setLoginActive(true);
    } else {
      setLoginActive(false);
    }
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
        <button className={`loginbtn ${loginActive ? 'active' : ''}`}>로그인</button>
        <div className="signup-link"> 
          <Link to="/user/save">회원가입</Link> 
        </div>
      </div>
    </div>  
  );
}

export default Login;
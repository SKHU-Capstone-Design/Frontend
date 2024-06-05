import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import '../Styles/Login.less';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [loginActive, setLoginActive] = useState(false); 
  const [saveLogin, setSaveLogin] = useState(false); // 로그인 정보 저장 여부

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    
    if (email !== '' && password !== '') {
      setLoginActive(true);
    } else {
      setLoginActive(false);
    }
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      });

      const accessToken = response.data.accessToken;

      if (saveLogin) {
        localStorage.setItem('accessToken', accessToken);
      }

      navigate('/user/home'); 
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  }

  return (
    <div className="loginwrap">
      <div className="maintxt"><p>capstone</p></div>
      <div className="gray-box">
        <div className='idbox'>
          <label>
            <input type="text" name="email" placeholder="아이디" value={email} onChange={handleInputChange} />
          </label>
        </div>
        <div className='pwbox'>
          <label>
            <input type="password" name="password" placeholder="비밀번호" value={password} onChange={handleInputChange} />
          </label>
        </div>
        <div className="save-login"> {/* 로그인 정보 저장 체크박스 */}
          <label className="checkbox-label">
            <input 
              type="checkbox" 
              name="saveLogin" 
              checked={saveLogin} 
              onChange={() => setSaveLogin(!saveLogin)} 
            /> 
            <span className="checkbox-text">간편 로그인 정보 저장</span>
          </label>
        </div>
        <button className={`loginbtn ${loginActive ? 'active' : ''}`} onClick={handleLogin}>로그인</button> 
        <div className="signup-link"> 
          <Link to="/user/save">회원가입</Link> 
        </div>
      </div>
    </div>  
  );
}

export default Login;

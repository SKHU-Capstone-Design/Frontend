import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import '../Styles/Login.less';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [loginActive, setLoginActive] = useState(false); 

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setemail(value);
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

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', accessToken);

      // 홈 페이지로 이동
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
        <button className={`loginbtn ${loginActive ? 'active' : ''}`} onClick={handleLogin}>로그인</button> 
        <div className="signup-link"> 
          <Link to="/user/save">회원가입</Link> 
        </div>
      </div>
    </div>  
  );
}

export default Login;

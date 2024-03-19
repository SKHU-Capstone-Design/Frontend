import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <>
      <div>
        <div className="loginwrap">
          <div className="maintxt"><p>capstone</p></div>
          <div>
            <label>
              <input type="text" placeholder="아이디" />
            </label>
          </div>
          <div>
            <label>
              <input type="password" placeholder="비밀번호" />
            </label>
          </div>
          <div>
            <label>
              <input type="radio" />
              간편 로그인 저장
            </label>
          </div>
          <button>로그인</button>
          <div className="signup-link"> 
            <Link to="/Signup">회원가입</Link> 
          </div>
        </div>  
      </div>
    </>
  )
}

export default Login;

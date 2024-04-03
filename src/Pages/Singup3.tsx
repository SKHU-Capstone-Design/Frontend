import { Link } from 'react-router-dom';
import "../Styles/signup3.less";    
import greenCheck from "../public/green_check.png"; 

function Signup3() {
    return (
        <div className="signup3-container">
            <div className='login_clear'>
                <img src={greenCheck} alt="green_check" className="green_check"/>  
                <p className="welcome">회원이 되신걸 환영합니다!</p>   
            </div>
            <div className='btn_group_signup3'>
                <Link to="/user/login"><button className="signup3-loginbtn">로그인</button></Link>
                <Link to="/user/home"><button className="signup3-homebtn">홈으로</button></Link>
            </div>
        </div>
    );
}

export default Signup3;

import { Link } from 'react-router-dom';
import "../Styles/Select.less";
import loginImage from "../public/login.png";
import signupImage from "../public/signup.png";

function Select() {
    return (
        <div className="select">
            <div className="selectwrap">
                <div className="image-container">
                    <Link to="/user/save" className="signup-link">
                        <img src={signupImage} alt="Signup" className="signup-image" />
                        <p className="signup-text">회원가입</p>
                    </Link>
                    <Link to="/user/login" className="login-link">
                        <img src={loginImage} alt="Login" className="login-image" />
                        <p className="login-text">로그인</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Select;

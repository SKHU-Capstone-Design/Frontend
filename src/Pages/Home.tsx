import { Link } from 'react-router-dom';
import "../Styles/Root.less"; 
import loginFinishImage from "../public/Login_finish.png"; 

function Home() {
    return (
        <div>
            <img src={loginFinishImage} alt="Login Finish" />

            <div>
                <Link to="/user/login"><button>로그인</button></Link>
                <Link to="/user/home"><button>홈으로</button></Link>
            </div>
        </div>
    );
}

export default Home;

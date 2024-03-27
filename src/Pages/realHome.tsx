import { Link } from 'react-router-dom';
import "../Styles/Navbar.less"; 

function RealHome() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="/avatar" className="link">아바타</Link>
                </li>
                <li>
                    <Link to="/diary" className="link">다이어리</Link>
                </li>
                <li>
                    <Link to="user/home" className="link">홈</Link>
                </li>
            </ul>
        </nav>
    );
}

export default RealHome;

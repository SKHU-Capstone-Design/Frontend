import { Link } from 'react-router-dom';
import "../Styles/Root.less";

function Home() {
    return (
        <div className="navbar">
            <Link to="/avatar">아바타</Link>
            <Link to="/home">홈</Link>
            <Link to="/diary">다이어리</Link>
        </div>
    );
}

export default Home;

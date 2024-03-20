import "../Styles/home.less";
import { Link } from 'react-router-dom';

function Home() {

        return (
            <>
                <div className="rootewrap">
                    <div className="rootetxt">
                        <p>가장 넓은 길은</p>
                        <p>언제나 내 마음속에</p>
                        <p>다이어리와 함께 걸어요</p>
                        <div className="signup-link"> 
                            <button><Link to="/Login">Let's go</Link></button> 
                        </div>
                    </div>
                </div>    
            </>
        )
    }
  
  export default Home;

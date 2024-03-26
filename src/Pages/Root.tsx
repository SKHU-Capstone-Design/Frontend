import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import "../Styles/Root.less";
import animationData from '../Asserts/diary_animation.json';

function Root() {
    const animation = useRef<Lottie>(null);

    useEffect(() => {
    
    }, []);

    return (
        <>
            <div className="root"></div>
            <div className="rootwrap">
                <div className="inner">
                    <div className="animation">
                        <Lottie
                            ref={animation}
                            options={{
                                animationData: animationData,
                                loop: true,
                                autoplay: true,
                            }}
                        />
                    </div>
                    <div className="roottxt">
                        <p className="load">가장 넓은 길은</p>
                        <p className="mind">언제나 내 마음속에</p>
                        <p className="smalltxt">다이어리와 함께 걸어요</p>
                        <div className="signup-link">
                            <button className="rootbtn">
                                <Link to="/user/login">Let's go</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Root;
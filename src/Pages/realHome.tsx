import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/realhome.less';
import '../Styles/Avatar.less';
import Navbar from './Navbar';
import avatarImg from "../public/avatar.png";
import calendarImg from "../public/calendar.png";

function RealHome() {
    const [avatarName, setAvatarName] = useState(""); 
    const [avatarLevel, setAvatarLevel] = useState(0); 

    useEffect(() => { 
        const savedAvatarName = localStorage.getItem("avatarName");
        if (savedAvatarName) {
            setAvatarName(savedAvatarName);
        }

        axios.get('http://34.239.189.147:8080/avatar/info', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(response => {
            setAvatarLevel(response.data.level);
        });
    }, [navigator]);

    const handleAvatarNameChange = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setAvatarName(value);
        localStorage.setItem("avatarName", value);

        axios.post('http://34.239.189.147:8080/avatar/name', { avatarName: value }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    };

    return (
        <div>
            <div className="realhomewrap">
                <Navbar />
                <div className='realhomewrap2'>
                    <div className='myavatar'>
                        <div className='avatar_nicknamebox'>
                            <input
                                type="text"
                                id='avatarname'
                                value={avatarName}
                                onChange={handleAvatarNameChange}
                                placeholder="My Avatar"
                            />
                        </div>
                        <div className='avatar_levelbox'>
                            <p className='avatar_lv'>{avatarLevel}</p>
                        </div>
                        <div className='avatar_imgbox'>
                            <Link to="/avatar/check">
                                <img src={avatarImg} alt="avatar" />
                            </Link>
                        </div>
                        <div className='mydiary' id='mydiary'>
                            <Link to="/diary/finalAll">
                                <img src={calendarImg} alt='calendar' /> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_footer'></div>
        </div>
    );
}

export default RealHome;

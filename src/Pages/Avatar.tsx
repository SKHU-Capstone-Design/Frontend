import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/realhome.less';
import '../Styles/Avatar.less';
import Navbar from './Navbar';
import avatarImg from "../public/avatar.png";

function Avatar() {
    const [avatarName, setAvatarName] = useState("");

    useEffect(() => {
        const savedAvatarName = localStorage.getItem("avatarName");
        if (savedAvatarName) {
            setAvatarName(savedAvatarName);
        }
    }, []);

    const sendAvatarNameToServer = (avatarName: string) => {
        axios.post('http://localhost:8080/avatar/name', { avatarName }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(_response => {
            console.log('아바타 이름을 서버에 전송했습니다.');
        })
        .catch(error => {
            console.error('아바타 이름 전송에 실패했습니다.', error);
        });
    };

    const handleAvatarNameChange = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setAvatarName(value);
        localStorage.setItem("avatarName", value);
        sendAvatarNameToServer(value);
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
                        <div className='avatar_levelbox'></div>
                        <div className='avatar_imgbox'>
                            <img src={avatarImg} alt="avatar" />
                        </div>
                        <div className='mydiary'>
                            <div className='inputss'>
                                <div className='inputs'>
                                    <label>닉네임</label>
                                    <input
                                        type="text"
                                        id='avatarName'
                                        value={avatarName}
                                        onChange={handleAvatarNameChange}
                                        placeholder="My Avatar"
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>레벨</label>
                                    <input
                                        type="text"
                                        id='avatarlv'
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>경험치</label>
                                    <input
                                        type="text"
                                        id='avatarExp'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_footer'></div>
        </div>
    );
}

export default Avatar;

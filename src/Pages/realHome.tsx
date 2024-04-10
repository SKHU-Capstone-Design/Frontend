import '../Styles/realhome.less';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import avatarImg from "../public/avatar.png";
import calendarImg from "../public/calendar.png";
import { Link } from 'react-router-dom';


function RealHome() {
    //usestate를 사용하여 avatarname의 초기값을 비어있는 문자열로 설정
    const [avtarname, setAvatarname] = useState(""); 


    useEffect(() => { //useEffect를 사용하여 avatarname의 값을 로컬스토리지에 저장된 값으로 변경
        const saveAvatarName = localStorage.getItem("avatarName");
        if (saveAvatarName) {
            setAvatarname(saveAvatarName);
        }
    }, []);

    /* ChangeAvatarName 함수를 사용하여 avatarname의 값을 변경하고 로컬스토리지에 저장.
    서버에 값을 보낼때 localstorage에 저장된 값을 보낼 예정이다.
    */
        const ChangeAvatarName = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setAvatarname(value);
        localStorage.setItem("avatarName", value);
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
                                value={avtarname}
                                onChange={ChangeAvatarName}
                                placeholder="My Avatar"
                            />
                        </div>
                        <div className='avatar_levelbox'></div>
                        <div className='avatar_imgbox'>
                            <img src={avatarImg} alt="avatar" />
                    </div>
                    <div className='mydiary'>
                        <img src={calendarImg} alt='calendar' /> 
                    </div>
                </div>
            </div>
        </div>
        <div className='home_footer'></div>
    </div>
    );
}

export default RealHome;

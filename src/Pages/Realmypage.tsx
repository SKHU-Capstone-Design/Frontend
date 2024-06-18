import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import mypageImg from '../public/mypage.png';

function Mypage() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        name: '',
        gender: '',
        age: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://34.239.189.147:8080/user/info', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const userData = response.data;
                const parsedUserInfo: Record<string, string> = {};
                userData.split('\n').forEach((line: { split: (arg0: string) => [any, any]; }) => {
                    const [key, value] = line.split(': ');
                    if (key && value) {
                        parsedUserInfo[key.trim().toLowerCase()] = value.trim();
                    }
                });
                setUserInfo({
                    email: parsedUserInfo['user email'] || '',
                    name: parsedUserInfo['user name'] || '',
                    gender: parsedUserInfo['user gender'] || '',
                    age: parsedUserInfo['user age'] || '',
                    phone: parsedUserInfo['user phone'] || ''
                });
                setLoading(false); 
            } catch (error) {
                console.error('사용자 정보를 불러오는 중 에러 발생:', error);
                setLoading(false); 
            }
        };

        fetchUserInfo();
    }, []); 
    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <div className="realhomewrap">
                <Navbar />
                <div className='realhomewrap2'>
                    <div className='myavatar'>
                        <img src={mypageImg} alt="avatar" />
                        <div className='inputss'>
                            <div className='inputs' id='inputs'>
                                <label>이메일</label>
                                <input
                                    type="text"
                                    id='useremail'
                                    value={userInfo.email}
                                    readOnly
                                />
                            </div>
                            <div className='inputs'>
                                <label>이름</label>
                                <input
                                    type="text"
                                    id='username'
                                    value={userInfo.name}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='mydiary'>
                            <div className='inputss'>
                                <div className='inputs'>
                                    <label>성별</label>
                                    <input
                                        type="text"
                                        id='userGender'
                                        value={userInfo.gender}
                                        readOnly
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>나이</label>
                                    <input
                                        type="text"
                                        id='userAge'
                                        value={userInfo.age}
                                        readOnly
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>번호</label>
                                    <input
                                        type="text"
                                        id='userPhone'
                                        value={userInfo.phone}
                                        readOnly
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

export default Mypage;

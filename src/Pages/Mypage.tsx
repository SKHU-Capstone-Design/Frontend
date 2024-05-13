import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/realhome.less';
import '../Styles/Avatar.less';
import '../Styles/Mypage.less';
import Navbar from './Navbar';

function Mypage() {
    const [email, setEmail] = useState(""); 
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/info', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const userInfo = response.data;
                setEmail(userInfo.email);
                setName(userInfo.name); 
                setGender(userInfo.gender); 
                setAge(userInfo.age); 
                setPhone(userInfo.phone); 
            } catch (error) {
                console.error('사용자 정보를 불러오는 중 에러 발생:', error);
            }
        };

        fetchUserInfo();
    }, []);


    return (
        <div>
            <div className="realhomewrap">
                <Navbar />
                <div className='realhomewrap2'>
                    <div className='myavatar'>
                        <div className='inputss'>
                            <div className='inputs'>
                                <label>이메일</label>
                                <input
                                    type="text"
                                    id='useremail'
                                    value={email}
                                    readOnly
                                />
                            </div>
                            <div className='inputs'>
                                <label>이름</label>
                                <input
                                    type="text"
                                    id='username'
                                    value={name}
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
                                        value={gender}
                                        readOnly
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>나이</label>
                                    <input
                                        type="text"
                                        id='userAge'
                                        value={age}
                                        readOnly
                                    />
                                </div>
                                <div className='inputs'>
                                    <label>번호</label>
                                    <input
                                        type="number"
                                        id='userPhone'
                                        value={phone}
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

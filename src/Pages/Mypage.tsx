import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/realhome.less';
import '../Styles/Avatar.less';
import '../Styles/Mypage.less';
import Navbar from './Navbar';
import mypageImg from '../public/mypage.png';

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

                /* 수정 전: input 요소의 값이 정의된 상태에서 정의되지 않은 상태로 변경되면서 경고가 발생하고, input요소에 사용자 정보가 출력되지 않음.
                이를 방지하기 위해, undefined 또는 null 값을 빈 문자열로 대체. input 요소의 값이 항상 정의된 상태로 유지되도록 수정함. */
                setEmail(userInfo.email || "");
                setName(userInfo.name || ""); 
                setGender(userInfo.gender || ""); 
                setAge(userInfo.age || ""); 
                setPhone(userInfo.phone || ""); 
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
                        <img src={mypageImg} alt="avatar" />
                        <div className='inputss'>
                            <div className='inputs' id='inputs'>
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
                                        type="text"
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

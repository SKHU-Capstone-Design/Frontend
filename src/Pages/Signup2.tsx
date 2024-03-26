import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Signup2() {
    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/Home"); 
    };

    const handlePrevious = () => {
        navigate("/user/save");
    };

    return (
        <div>
            <p>회원가입</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        value={nickname} 
                        onChange={(e) => setNickname(e.target.value)} 
                        placeholder="닉네임을 입력하세요" 
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        placeholder="나이를 입력하세요" 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)} 
                        placeholder="성별을 입력하세요" 
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder="휴대폰 번호를 입력하세요" 
                    />
                </div>
                <div>
                <button type="button" onClick={handlePrevious}> 이전 </button> 
                    <button type="submit"> 다음  </button> 
                </div>
            </form>
        </div>
    );
}

export default Signup2;

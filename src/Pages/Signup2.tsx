import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup2.less";    

function Signup2() {
    const [nickname, setNickname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phonenum, setPhonenum] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        navigate("/user/save3"); 
    };

    const handlePrevious = () => {
        navigate("/user/save");
    };

    return (
        <div className="signupwrap0">    
            <div className="signupwrap">
                <p className="signuptext">회원가입</p>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="input-container">
                        <input 
                            type="text" 
                            id="nickname"
                            placeholder="닉네임"
                            required
                            value={nickname} 
                            onChange={(e) => setNickname(e.target.value)} 
                        />
                    </div>
                    <div className="input-container2">
                        <input 
                            type="number" 
                            id="age"
                            placeholder="나이"
                            required
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} 
                        />
                    </div>
                    <div className="input-container2">
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)} 
                        >
                            <option value="">성별을 선택해주세요</option>
                            <option value="MALE">남성</option>
                            <option value="FEMALE">여성</option>
                        </select>
                    </div>
                    <div className="input-container2">
                        <input 
                            type="text" 
                            id="phonenum"
                            placeholder="휴대폰 번호"
                            required
                            value={phonenum} 
                            onChange={(e) => setPhonenum(e.target.value)} 
                        />
                    </div>
                    <div className="button-container2">
                        <button type="button" onClick={handlePrevious} className="prebtn"> <p>&lt;</p> </button> 
                        <button type="submit" className="nextbtn"> <p>&gt;</p>  </button> 
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup2;

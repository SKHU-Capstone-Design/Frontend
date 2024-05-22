import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.less"; 

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // 이메일 유효성 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const koreanCharRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; 
        if (!emailRegex.test(email) || koreanCharRegex.test(email)) {
            alert('올바르지 않은 형식입니다');
            return;
        }

        // [비밀번호 유효성 검사]
        // 길이에 따른 유효성 검사
        if (password.length < 6) {
            alert('올바르지 않은 형식입니다 (비밀번호는 6자 이상이어야 합니다)');
            return;
        }
        // 비밀번호, 비밀번호 확인이 일치하는지 확인
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        navigate("/user/save2", { state: { email, password } }); 
    };

    const handlePrevious = () => {
        navigate("/user"); 
    };


    const handleEmailChange = (e: { target: { value: string; }; }) => {
        const value = e.target.value;
        const koreanCharRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; 
        if (koreanCharRegex.test(value)) {
            alert('올바르지 않은 형식입니다.');
            return;
        }
        setEmail(value);
    };

    return (
        <div className="signupwrap0">    
            <div className="signupwrap">
                <p className="signuptext">회원가입</p>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="input-container">
                        <input 
                            type="email" 
                            id="email"
                            placeholder="이메일"
                            required
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            id="password"
                            placeholder="비밀번호"
                            required
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            id="confirmPassword"
                            placeholder="비밀번호 확인"
                            required
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <div className="button-container">
                        <button type="button" onClick={handlePrevious} className="prebtn"> <p>&lt;</p> </button> 
                        <button type="submit" className="nextbtn"> <p>&gt;</p>  </button> 
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;

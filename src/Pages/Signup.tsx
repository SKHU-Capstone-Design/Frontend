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
        navigate("/user/save2"); 
    };

    const handlePrevious = () => {
        navigate("/user");
    };

    return (
        <div className="signupwrap">
            <p className="signuptext">회원가입</p>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="input-container">
                    <label htmlFor="email">이메일</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">비밀번호 확인 </label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                </div>
                <div className="button-container">
                    <button type="button" onClick={handlePrevious}> 이전 </button> 
                    <button type="submit"> 다음  </button> 
                </div>
            </form>
        </div>
    );
}

export default Signup;

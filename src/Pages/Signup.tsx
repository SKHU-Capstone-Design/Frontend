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

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        navigate("/user/save2"); 
    };

    const handlePrevious = () => {
        navigate("/user");
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
                        onChange={(e) => setEmail(e.target.value)} 
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

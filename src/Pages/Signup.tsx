import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <p>회원가입</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="이메일을 입력하세요" 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="비밀번호를 입력하세요" 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="비밀번호를 확인하세요" 
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

export default Signup;

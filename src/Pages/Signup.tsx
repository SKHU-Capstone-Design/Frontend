import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.less";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const invalidCharRegex = /[~!#$%^&*()_+|<>?:{}]/; 
        return emailRegex.test(email) && !invalidCharRegex.test(email);
    };

    const validatePassword = (password:any) => {
        return password.length >= 6;
    };

    const validateConfirmPassword = (password: string, confirmPassword: string) => {
        return password === confirmPassword;
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

        setIsEmailValid(isEmailValid);
        setIsPasswordValid(isPasswordValid);
        setIsConfirmPasswordValid(isConfirmPasswordValid);

        let errorMessage = '';

        if (!isEmailValid) {
            errorMessage += '올바르지 않은 이메일 형식입니다\n';
        }
        if (!isPasswordValid) {
            errorMessage += '비밀번호는 6자 이상이어야 합니다\n';
        }
        if (!isConfirmPasswordValid) {
            errorMessage += '비밀번호가 일치하지 않습니다\n';

            setPassword('');    
        } 
        
        if (errorMessage !== '') {
            alert(errorMessage);
            return;
        }

        navigate("/user/save2", { state: { email, password } });
    };

    const handlePrevious = () => {
        navigate("/user");
    };

    const handleEmailChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handlePasswordChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setPassword(value);
        setIsPasswordValid(validatePassword(value));
        setIsConfirmPasswordValid(validateConfirmPassword(value, confirmPassword));
    };

    const handleConfirmPasswordChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setIsConfirmPasswordValid(validateConfirmPassword(password, value));
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
                            className={!isEmailValid ? 'invalid' : ''}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            className={!isPasswordValid ? 'invalid' : ''}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="비밀번호 확인"
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className={!isConfirmPasswordValid ? 'invalid' : ''}
                        />
                    </div>
                    <div className="button-container">
                        <button type="button" onClick={handlePrevious} className="prebtn"> <p>&lt;</p> </button>
                        <button type="submit" className="nextbtn"> <p>&gt;</p> </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
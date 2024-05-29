import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Signup2.less";
import axios from "axios";

interface State {
  email: string;
  password: string;
}

function Signup2() {
  const location = useLocation();
  const state = location.state as State;

  const [nickname, setNickname] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phonenum, setPhonenum] = useState<string>("");
  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(true);
  const [isPhonenumValid, setIsPhonenumValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const validateNickname = (nickname: string): boolean => {
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{1,13}$/; 
    return nicknameRegex.test(nickname);
  };

  const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^[0-9]{10,11}$/; 
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const isNicknameValid = validateNickname(nickname);
    const isPhonenumValid = validatePhoneNumber(phonenum);

    setIsNicknameValid(isNicknameValid);
    setIsPhonenumValid(isPhonenumValid);

    let errorMessage = '';

    if (!isNicknameValid) {
      errorMessage += '닉네임은 1-13 글자까지 입력할 수 있으며, 특수기호를 사용할 수 없습니다\n';
    }

    if (!isPhonenumValid) {
      errorMessage += '전화번호는 10자리 또는 11자리 숫자로 입력해주세요\n';
    }

    if (errorMessage !== '') {
      alert(errorMessage);
      return;
    }

    const data = {
      email: state.email,
      password: state.password,
      name: nickname,
      age: parseInt(age),
      gender,
      phone: phonenum,
    };

    try {
      const response = await axios.post("http://localhost:8080/signup", data);
      if (response.status === 200) {
        console.log("success");
        navigate("/user/save3");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePrevious = (): void => {
    navigate("/user/save");
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.length <= 13) {
      setNickname(value);
      setIsNicknameValid(validateNickname(value));
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/-/g, ""); 
    setPhonenum(value);
    setIsPhonenumValid(validatePhoneNumber(value));
  };

  return (
    <div className="signupwrap0">
      <div className="signupwrap2">
        <p className="signuptext2">회원가입</p>
        <form onSubmit={handleSubmit} className="form-container2">
          <div className="input-container2">
            <input
              type="text"
              id="nickname"
              placeholder="닉네임"
              required
              value={nickname}
              onChange={handleNicknameChange}
              className={!isNicknameValid ? 'invalid' : ''}
            />
          </div>
          <div className="input-container2">
            <input
              type="number"
              id="age"
              placeholder="나이"
              required
              value={age}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
            />
          </div>
          <div className="input-container2">
            <select
              id="gender"
              value={gender}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
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
              onChange={handlePhoneChange}
              className={!isPhonenumValid ? 'invalid' : ''}
            />
          </div>
          <div className="button-container2">
            <button type="button" onClick={handlePrevious} className="prebtn2">
              <p>&lt;</p>
            </button>
            <button type="submit" className="nextbtn2">
              <p>&gt;</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup2;

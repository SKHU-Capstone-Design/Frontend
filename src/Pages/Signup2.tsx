import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "../Styles/Signup2.less";
import axios from "axios";

function Signup2() {
  const { state } = useLocation();
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

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
        console.log("success"); // 서버로부터 200 응답을 받으면 메시지 출력.
        navigate("/user/save3"); // 코드 추가. 회원가입 성공 시 회원가입 성공 페이지로 이동하게 함
      }
    } catch (error) {
      console.error("Error:", error); // 서버로부터 200 응답을 받지 못하면 에러 출력. 개발자의 편의를 위한 코드이다.
    }
  };

  const handlePrevious = () => {
    navigate("/user/save");
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

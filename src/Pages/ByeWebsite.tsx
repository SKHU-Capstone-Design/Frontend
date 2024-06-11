import { useState } from "react";
import NavBar from "./Navbar.tsx";
import Modal from "./Modal.tsx";
import '../Styles/ByeWebsite.less';

const ByeWebsite = () => {
    const [showModal, setShowModal] = useState(false);

    const handleResetClick = () => {
      setShowModal(true);
    }

    const handleModalClose = () => {
      setShowModal(false);
    }

    const handleResetConfirm = () => {
      console.log("Performs complete routine initialization..");
      setShowModal(false); 
    }

  return (
    <div>
      <NavBar />
      <div className="bywebsite-wrap">
        <button className="bywebsite-btn" onClick={handleResetClick}>회원탈퇴</button>
        <div className="bywebsite-txt">
          회원탈퇴를 진행합니다. <br/>
          탈퇴 후에는 아바타 및 다이어리 정보를 복구할 수 없어요.
        </div>
      </div>
      {showModal && <Modal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default ByeWebsite;

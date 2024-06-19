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
        <button className="bywebsite-btn" onClick={handleResetClick}>로그아웃</button>
        <div className="bywebsite-txt">
          로그아웃을 진행합니다. <br/>
          로그아웃 후에는 다시 로그인해야 합니다.
        </div>
      </div>
      {showModal && <Modal onClose={handleModalClose} onConfirm={handleResetConfirm} />}
    </div>
  );
};

export default ByeWebsite;

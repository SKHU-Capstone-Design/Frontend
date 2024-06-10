import '../Styles/Modal.less'; 

const ResetModalBox = ({ onConfirm, onClose }: { onConfirm: () => void, onClose: () => void }) => {
    return (
        <div className="modal-reset-modal-backdrop">
            <div className="modal-reset-modal-box-container">
                <div className="modal-reset-modal-title">
                    <strong>탈퇴하시겠습니까?</strong>
                </div>
                <div>
                    <button className="modal-reset-modal-button" onClick={onConfirm}>예</button>
                    <button className="modal-reset-modal-button-no" onClick={onClose}>아니오</button>
                </div>
            </div>
        </div>
    );
};

export default ResetModalBox;

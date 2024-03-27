import "../Styles/Root.less"; 

function realHome() {
    const handlePrevious = () => {
    };

    return (
        <div>

            <div>
                <button type="button" onClick={handlePrevious}> 로그인  </button> 
                <button type="button" onClick={handlePrevious}> 홈으로  </button> 
            </div>
        </div>
    );
}

export default realHome;

import React, { useRef, useState } from 'react';
import '../Styles/progressbar.less';  

const MultiStepProgress: React.FC = () => {
    const [currentProgress, setCurrentProgress] = useState<number>(1);
    const circle = useRef<HTMLDivElement>(null);
    const progressBar = useRef<HTMLDivElement>(null); // 변경된 부분
    const progressArr = [2, 3];

    const minusSteps = () => {
        if (circle.current && progressBar.current) {
            let progressCount = Number(circle.current.childNodes[currentProgress - 2].textContent);
            progressBar.current.style.width = `${(progressCount - 1) * 50}%`;
            setCurrentProgress(currentProgress - 1);
            if (currentProgress === progressCount) { 
                (circle.current.childNodes[progressCount] as HTMLElement).classList.remove('active');
            }
        }
    }

    const addSteps = () => {
        if (circle.current && progressBar.current) {
            let progressCount = Number(circle.current.childNodes[currentProgress - 1].textContent);
            setCurrentProgress(currentProgress + 1);
            progressBar.current.style.width = `${progressCount * 50}%`;
            if (currentProgress === progressCount) {
                circle.current.childNodes[progressCount].classList.add('active');
            }
        }
    }

    return (
        <div className="container">
            <div className="steps" ref={circle}>
                <span className={`circle ${currentProgress === 1 ? 'active' : ''}`}>1</span>
                {progressArr.map((i) => (
                    <span className="circle" key={i}>{i}</span>
                ))}
                <div className="progress-bar">
                    {/* 변경된 부분: span에서 div로 변경 */}
                    <div ref={progressBar} className="indicator"></div>
                </div>
            </div>
            <div className="buttons">
                {/* 버튼 작동 여부 변경: currentProgress === 1이 아닌 경우에만 버튼을 활성화 */}
                <button id="prev" disabled={currentProgress === 1} onClick={minusSteps}>Prev</button>
                <button id="next" disabled={currentProgress === 3} onClick={addSteps}>Next</button>
            </div>
        </div>
    );
};

export default MultiStepProgress;

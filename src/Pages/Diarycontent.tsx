import '../Styles/Diarycontent.less';
import Navbar from './Navbar';
import { BsPencil } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'; 

function Diarycontent() {  
    const navigate = useNavigate();

    /*연필 아이콘 클릭 시 navigate 함수를 사용하여 '/diary/put'으로 이동.
    추후 게시글 아이디를 이용해 각 아이디에 맞는 페이지로 이동할 수 있도록 수정할 예정이다. (url 파라미터 사용) */
    const handleEditClick = () => {
        navigate('/diary/put');
    };
    
    return (
        <div>
            <div className="dairycontent_wrap">
                <Navbar />
                <div className='diarybackground'>
                    <div className='dairycontent'>
                        <div className='pencil_icon' onClick={handleEditClick}> 
                          <BsPencil className='pencil'/> 
                        </div>
                        <div className='diary_title'> {/* 스타일 설정 확인을 위한 임시데이터 */}
                          회대 최고의 수업 소프캡디 
                        </div>
                        <div className='diary_content'> {/* 스타일 설정 확인을 위한 임시데이터 */}
                          나는 소프캡디 수업이 정말 좋다ㅎㅎ
                   
                        </div>
                    </div>
                </div>
                <div className='home_footer'></div>
            </div>
        </div>
    );
}

export default  Diarycontent;

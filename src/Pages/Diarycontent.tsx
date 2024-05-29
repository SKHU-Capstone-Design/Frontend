import { useState, useRef } from 'react';
import '../Styles/Diarycontent.less';
import Navbar from './Navbar';
import { BsPencil, BsTrash } from "react-icons/bs";

function Diarycontent() {
  const [isEditMode, setIsEditMode] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState('회대 최고의 수업 소프캡디');
  const [content, setContent] = useState('나는 소프캡디 수업이 정말 좋다ㅎㅎ');

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode && titleRef.current && contentRef.current) {
      setTitle(titleRef.current.innerText);
      setContent(contentRef.current.innerText);
    }
  };

  return (
    <div>
      <div className="dairycontent_wrap">
        <Navbar />
        <div className='diarybackground'>
          <div className='dairycontent'>
            <div className='icons'>
              <div className='icon' onClick={handleEditClick}> 
                <BsPencil className='pencil'/> 
              </div>
              <div className='icon'>
                <BsTrash className='trash' />
              </div>
            </div>
            <div 
              className='diary_title'
              contentEditable={isEditMode}
              ref={titleRef}
              suppressContentEditableWarning={true}
            >
              {title}
            </div>
            <div 
              className='diary_content'
              contentEditable={isEditMode}
              ref={contentRef}
              suppressContentEditableWarning={true}
            >
              {content}
            </div>
          </div>
        </div>
        <div className='home_footer'></div>
      </div>
    </div>
  );
}

export default Diarycontent;

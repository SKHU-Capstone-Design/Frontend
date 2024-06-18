import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Diarycontent.less';
import Navbar from './Navbar';
import { BsPencil, BsTrash } from "react-icons/bs";

interface DiaryParams {
  [key: string]: string; 
}

interface DiaryData {
  diaryId: string;
  title: string;
  body: string;
}

function Diarycontent() {
  const { diaryId } = useParams<DiaryParams>(); 
  const [isEditMode, setIsEditMode] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // 서버로부터 다이어리 데이터를 불러옴
    const fetchDiary = async () => {
      try {
        const response = await axios.get(`http://34.239.189.147:8080/diary/${diaryId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        const diaryData: DiaryData = response.data;
        setTitle(diaryData.title);
        setContent(diaryData.body);
      } catch (error) {
        console.error('다이어리 데이터를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchDiary();
  }, [diaryId]);

  const handleEditClick = async () => {
    if (isEditMode) {
      if (titleRef.current && contentRef.current) {
        const updatedTitle = titleRef.current.innerText;
        const updatedContent = contentRef.current.innerText;
        
        try {
          await axios.post(`http://54.226.75.10:8080/diary/save`, {
            diaryId: diaryId,
            title: updatedTitle,
            body: updatedContent,
            date: new Date().toISOString().split('T')[0] 
          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          });
        } catch (error) {
          alert('다이어리 수정에 실패했습니다.');
        }
      }
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <div>
      <div className="dairycontent_wrap">
        <Navbar />
        <div className='diarybackground'>
          <div className='dairycontent'>
            <div className='icons'>
              <div className='icon' onClick={handleEditClick}>
                <BsPencil className='pencil' />
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

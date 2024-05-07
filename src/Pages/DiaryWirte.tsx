import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from './Navbar';
import '../Styles/realhome.less';
import '../Styles/Diary.less';

function Diary() {
  const { date } = useParams(); 
  const [Body, setBody] = useState({
    title: '',
    body: '',
    date: date 
  });

  const getValue = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setBody({
      ...Body,
      [name]: value
    });
  };

  const todayDiarySave = async () => {
    try {
      await axios.post(`http://localhost:8080/diary/save?date=${date}`, {
        title: Body.title,
        body: Body.body
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      window.alert('일기가 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('일기 저장 실패. 다시 시도해주세요', error);
    }
  };

  return (
    <div className="WirteWrap">
      <Navbar />
      <hr />
      <div className='FormWrapper'>
        <input
          className="title-input"
          type='text'
          placeholder='제목'
          name='title'
          value={Body.title}
          onChange={getValue}
        />
        <CKEditor
          editor={ClassicEditor}
          data={Body.body}
          onChange={(_event, editor) => {
            const data = editor.getData();
            setBody({
              ...Body,
              body: data
            });
          }}
        />
      </div>
      <button className="submit-button" onClick={todayDiarySave}>저장</button> 
    </div>
  );
}

export default Diary;
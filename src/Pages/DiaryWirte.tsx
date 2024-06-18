import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from './Navbar';
import '../Styles/realhome.less';
import '../Styles/Diary.less';

interface DiaryState {
  title: string;
  body: string;
  date: string;
}

interface Params {
  [key: string]: string | undefined;
}

const Diary: React.FC = () => {
  const { date } = useParams<Params>(); 
  const [Body, setBody] = useState<DiaryState>({
    title: '',
    body: '',
    date: date || '' // URL 파라미터로부터 받은 날짜를 상태에 포함, date가 undefined일 경우 빈 문자열 할당
    // 코드 수정 이전, 쿼리 파라미터로 서버에 요청을 보냈더니 서버에서 날짜를 식별하지 못했다. 백엔드 코드를 재검토한 결과, 본문(body)에서 날짜를 받아야 했다.    
  });

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBody({
      ...Body,
      [name]: value
    });
  };

  const todayDiarySave = async () => {
    try {
      await axios.post('http://34.239.189.147:8080/diary/save', {
        title: Body.title,
        body: Body.body,
        date: Body.date // date 필드를 포함하여 전송
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

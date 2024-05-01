import '../Styles/realhome.less';
import Navbar from './Navbar';
import '../Styles/Diary.less';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Diary() {
  const [Content, setContent] = useState({
    title: '',
    content: ''
  });

  const getValue = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value
    });
  };

  return (
    <div className="WirteWrap">
        <Navbar />
        <hr></hr>
      <div className='FormWrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor // Ckeditor의 인스턴스 객체를 받아와서 사용
          editor={ClassicEditor}
          data=""
          onChange={(event, editor) => { 
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...Content,
              content: data
            });
          }}
          onBlur={(editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button 
        className="submit-button"
        >저장</button> 
    </div>
  );
}

export default Diary;
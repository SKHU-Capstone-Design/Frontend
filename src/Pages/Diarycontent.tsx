import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import Navbar from './Navbar';
import '../Styles/Diarycontent.less';

interface DiaryParams extends Record<string, string | undefined> {
  date: string;
  title: string;
}

interface DiaryData {
  title: string;
  body: string;
  date: string;
}

function DiaryContent() {
  const { date, title } = useParams<DiaryParams>();
  console.log('Params:', { date, title });

  const [diary, setDiary] = useState<DiaryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        if (!title || !date) {
          throw new Error('Title or date is missing');
        }
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token is missing');
        }

        const response = await axios.get('http://34.239.189.147:8080/diary/findByTitleAndDate', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          params: {
            title,
            date
          }
        });

        if (response.status === 200) {
          setDiary(response.data);
          setError(null);
        } else {
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            setError(`Error: ${error.response.status} - ${error.response.data.message}`);
          } else {
            setError(error.message);
          }
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error occurred');
        }
        console.error('Failed to fetch diary data:', error);
      }
    };

    fetchDiary();
  }, [date, title]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!diary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="dairycontent_wrap">
        <Navbar />
        <div className='diarybackground'>
          <div className='dairycontent'>
            <div className='diary_title'>
              {diary.title}
            </div>
            <div className='diary_content'>
              {diary.body}
            </div>
          </div>
        </div>
        <div className='home_footer'></div>
      </div>
    </div>
  );
}

export default DiaryContent;

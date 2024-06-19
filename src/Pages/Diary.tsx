import Navbar from './Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import { useNavigate } from 'react-router-dom'; 
import "../Styles/Calendar.less"; 

const Diary = () => {
  const navigate = useNavigate(); 
  
  const handleDateClick = (mydiary: { dateStr: string }) => {
    navigate(`/diary/list/${mydiary.dateStr}`);
  };

  return (
    <div>
      <Navbar />
      <div className='calendarWrap'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          dateClick={handleDateClick}
        />
      </div>
    </div>
  );
};

export default Diary;

import Navbar from './Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import { useNavigate } from 'react-router-dom'; 
import "../Styles/Calendar.less"; 

function Diary() {
  const navigate = useNavigate(); 
  
  return (
    <div>
      <Navbar />
      <div className='calendarWrap'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          dateClick={(mydiary) => {
            navigate(`/diary/list/${mydiary.dateStr}`);
          }}
        />
      </div>
    </div>
  );
}

export default Diary;

import React from 'react';
import '../Styles/realhome.less';
import Navbar from './Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; 

function Diary() {
    return (
        <div>
            <Navbar />
            <p>다이어리 페이지</p>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    );
}

export default Diary;

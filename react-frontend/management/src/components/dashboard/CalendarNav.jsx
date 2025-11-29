import { useEffect, useState } from "react";

import { addMonths, subMonths, startOfToday } from "date-fns";

  

function CalendarNav({setCurrent, currentMonth, currentYear, currentDate}){

function setToday(){
       setCurrent(startOfToday);
     }
   
     function prevMonth(){
       setCurrent(subMonths(currentDate, 1));
     }
   
     function nextMonth(){
       setCurrent(addMonths(currentDate, 1));
     }

    return <div class="calendar-nav">
    
    
    <button class="arrowButton" onClick={prevMonth}><span class="material-symbols-outlined" >arrow_back_ios</span></button>
     <div></div>
     <div></div>

    <button class="month-year" onClick={setToday}>
    {currentMonth}
    </button>       
    <div></div>   
    <div></div>  
    <button class="arrowButton" onClick={nextMonth}><span class="material-symbols-outlined" >arrow_forward_ios</span></button>

    </div>

}

export default CalendarNav;
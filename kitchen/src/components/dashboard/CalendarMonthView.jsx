import CalendarNav from "./CalendarNav";
import {isToday, isSameDay, getYear, isPast} from 'date-fns';


function CalendarMonthView({num, ordersMonth, openWeekView, currentDate, currentMonth, setCurrent}){

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentYear = getYear(currentDate);

    return <div>

                <CalendarNav currentDate={currentDate} currentMonth={currentMonth} setCurrent={setCurrent} currentYear={currentYear}/>
            
                <div class="calendar">
                {days.map((day) => {
                return <div class="day-name"> {day} </div>

                })}
                { num.map((item)=>{
                    var c = "day-num";

                    if(ordersMonth?.filter((order)=>
                        isSameDay(item, order.date))[0]){
                        c="day-num-order-true"
                        if(isToday(item)){
                        c = "day-num-today-order-true";
                    } 
                    else if(isPast(item)){
                        c = "day-num-past-order-true";
                    }  


                        }
                        else if(isToday(item)){
                        c = "day-num-today";
                    }  

                    else if(isPast(item)){
                        c = "day-num-past"

                    }
                    
                    return  <button name={item} onClick={openWeekView} class={c}>
                    {item.getDate()}
                </button>
                    
                }

                )}
                </div>

    </div>



}

export default CalendarMonthView;
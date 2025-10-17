import { useState } from "react";
import CalendarNav from "./CalendarNav";
import {isToday, isSameDay, isSameMonth,getYear, isPast} from 'date-fns';


function CalendarMonthView({num, ordersMonth, currentDate, currentMonth, setCurrent}){


    function showDayOrders(event){
        setCurrent(new Date(event.target.name));


    }

    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentYear = getYear(currentDate);

    return <div class="calendar-month-view">

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
                        c = "day-num-today-order-true day-selected";
                    }  
                    else if(isPast(item)){
                        c = "day-num-past-order-true";
                        if(!isSameMonth(currentDate,item)){
                            c = "day-num-past-order-true day-num-grey-order-true"
                        }
                    }


                        }
                        else if(isToday(item)){
                        c = "day-num-today";
                    }
                    else if(isPast(item)){
                        c = "day-num-past"

                    }    

                    if(isSameDay(currentDate,item)){
                        c += " day-num-selected"
                    }
                    if(!isSameMonth(currentDate,item)){
                        c += " day-num-grey"
                    }

                    
                    
                    return  <div class="calendar-num-container">
                    <button name={item} onClick={showDayOrders} class={c}>
                    {item.getDate()}
                </button> </div>
                    
                }

                )}
                </div>

    </div>



}

export default CalendarMonthView;
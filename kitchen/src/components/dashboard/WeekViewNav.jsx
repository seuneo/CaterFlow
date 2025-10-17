import {startOfWeek, endOfWeek, eachDayOfInterval, addWeeks, subWeeks, isSameDay} from 'date-fns'

function WeekViewNav({orders, currentDate, setCurrent}){

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const num = eachDayOfInterval({
        start: startOfWeek(currentDate),
        end: endOfWeek(currentDate)
      })
      
        function prevWeek(){
          setCurrent(subWeeks(currentDate, 1));
        }
      
        function nextWeek(){
          setCurrent(addWeeks(currentDate, 1));
        }

        function getOrders(event){
            //setCurrentDate()
            const {name} = event.target;
            setCurrent(name);
        }
   
       return <div class="week-view-nav">
       <div class="week-view-nav-days">
       <div></div>
       <div class="week-view-nav-days2">

       
       {days.map((day) => {
              return <div class="day-name"> {day} </div>

            })}</div>
            <div></div>
            </div>

            <div class="week-view-nav-buttons">
       
       <button class="arrowButton" onClick={prevWeek}><span class="material-symbols-outlined" >arrow_back_ios</span></button>
       <div class="week-dates">
   {num.map((item)=>{
    var c="week-dates-num";

    if(orders?.filter((order)=>
                        isSameDay(item, order.date))[0]){
                        c="week-dates-num-current-order-true"
                        }

    if(isSameDay(item, currentDate)){
        c="week-dates-num-current";
    }

    return <button class={c} name={item} onClick={getOrders}>
    {item.getDate()}</button>
    
   })}</div>
               <button class="arrowButton" onClick={nextWeek}><span class="material-symbols-outlined" >arrow_forward_ios</span></button>
       
   </div>
       </div> 


}

export default WeekViewNav;
import {startOfToday } from "date-fns"

import UpcomingOrdersCard from "./UpcomingOrdersCard";

function UpcomingOrdersView({orders}){

    return <div class="upcoming-orders-page">
      
          <div>
            <div class="upcoming-orders-title">Upcoming Orders</div>
            <div>
            {
            orders?.filter((order)=> order.type == "catering").filter((order)=> new Date(order.date) > startOfToday())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((item)=> 
                {
                  return <UpcomingOrdersCard order={item}/>
                  
                  
                } )
              }
             </div> 
        </div>
    
    
      </div>

}

export default UpcomingOrdersView
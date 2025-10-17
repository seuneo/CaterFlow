import {getMonth} from 'date-fns';

function UpcomingOrdersCard({order}){

    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "June", "July", "Aug",
        "Sept", "Oct", "Nov", "Dec"
      ];
           const currentMonth = months[getMonth(order?.date)];
    
    return <div class="upcoming-order-card">
    <div class="upcoming-order-date">
        <div>
            {new Date(order?.date).getDate()}
        </div>
        <div class="upcoming-order-month">
        {currentMonth}

        </div>

    </div>
    <div class="upcoming-order-info">
        <div class="upcoming-order-time">
            {new Date(order?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div class="upcoming-order-details">
            <div>
                {order?.name}
            </div>
            <div>
                {order?.deliveryMode}
            </div>
            <div>
                {order?.orderList.length} items
            </div>

            </div>
        </div>
    
        <div>  
    </div>  
       </div>

}

export default UpcomingOrdersCard;
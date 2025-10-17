
function OrderInfo({order, viewOrder}){

    return <div class="order-list-item">

    <div>

        <div>{order.name}</div>
    <div class="order-list-buttons"> 
        <button onClick={viewOrder} class="order-info-edit" name="edit" id={order._id}> <span  class="material-symbols-outlined" name="edit" id={order._id}>
edit
</span></button>
        
        <button onClick={viewOrder} class="order-info-delete" name="delete" id={order._id}><span  class="material-symbols-outlined" name="delete" id={order._id}>
delete
</span></button>
        </div>
        
    </div>
    <div>  
    <div>
         <div> {order.contact.slice(-4)}</div>
         <div class="order-info-status"> {order.status}</div>
    </div>
       
        <div> {new Date(order?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase()}</div>
    </div>  
        
    
    
    </div>

}

export default OrderInfo

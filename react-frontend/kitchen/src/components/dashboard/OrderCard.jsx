import { useState, useEffect } from "react";
import { useOrderBank } from "../../orders/order";

function OrderCard({order, setOrders, statusNav, setStatusNav}){

    function statusChangeButton(){
        var s = ""
        if(statusNav == "Ordered"){
            s = "Receive Order"
            
        }

        else if(statusNav == "Received"){
            s = "Prepare Order"

        }
        else if(statusNav == "In Progress"){
            s= "Complete Order"

        }
        else if(statusNav == "Completed"){

            s = ""

        }
        return s;

    }

    const {editOrder} = useOrderBank();

    function capitalize(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const [check, showCheckMark] = useState(true);
    const [editStatus, showEditStatus] = useState(false);

    function openConfirm(){
        showCheckMark(false);
        showEditStatus(true);
    }

    function setCheckYes(){
        showCheck();


        
        setOrders((prevValue)=>{
            const updatedOrder = prevValue.map((item)=>{
                if(item._id == order._id){
                    
                    if(statusNav == "Ordered"){
                        changeStatus({...item, status:"Received", receivedBy: localStorage.username})
                        
                    return {...item, status:"Received", receivedBy: localStorage.username} 
                    }
                    else if(statusNav == "Received"){
                        changeStatus({...item, status:"In Progress", startedBy: localStorage.username})
                        
                    return {...item, status:"In Progress", prepCompletedBy: localStorage.username} 
                    }
                    else if(statusNav == "In Progress"){
                        changeStatus({...item, status:"prepComplete", prepCompletedBy: localStorage.username})
                        
                    return {...item, status:"prepComplete", prepCompletedBy: localStorage.username} 
                    }
                    
                }
                    return item;             
            });
            return updatedOrder;
        })

        if(statusNav == "Ordered"){
            setStatusNav("Received")
            
        }

        else if(statusNav == "Received"){
            setStatusNav("In Progress")

        }
        else if(statusNav == "In Progress"){         
            setStatusNav("Completed")
        }
        
    }

    function setCheckNo(){
        showCheck();
        
    }

    useEffect(()=>{
        setCheckNo();
    },[statusNav]);
    

    function showCheck(){
        showCheckMark(true);
        showEditStatus(false);
    }

    async function changeStatus(order){
        editOrder(order._id, order);
    }

    return <div class="order-card">

    <div class="order-card-header">
        <div class="order-card-header-top">        
            <div class="order-header-time">
            {new Date(order?.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase()}
            
            </div>
            <div class={order.paymentStatus=="Paid" ? "order-card-payment-status-paid" : "order-card-payment-status-not-paid"}>
            <div>
                <span class="material-symbols-outlined">
                check_small
                </span>
            </div>
            <div>
               {order.paymentStatus} 
            </div>
            </div>                          
        </div>
        <div class="order-card-header-bottom">
            <div>{order.deliveryMode}</div>
        </div>     
    </div>

    <div class="order-card-orders">
    <div class="order-card-orders-header">
        <div>Qty</div>
        <div>Item</div>
    </div>
        {order?.orderList.map((item)=>{
            return <div class="order-card-orders-item">
            <div> {item.quantity}</div>
            <div> {capitalize(item.name)}
            </div>
            </div> 
        })}
    </div>
 { order?.notes && <div class="order-card-notes">
    
        {(order?.notes)} 
    </div>}
    <div class="order-card-customer-info">
    <div>
        {order.name}
    </div>
    <div>
        {order.contact}
    </div>

    </div>

    <div class="order-status-change">
       
            { statusNav !== "Completed" ?  <div class="order-card-status-check-container">
            {check && 
              <button class="order-card-set-status" onClick={openConfirm}>
                {statusChangeButton()}
            </button> } </div> : <div> </div>}
            { editStatus && <div class="order-card-header-edit-status"> 
            <div>Are you sure?</div>
            <button class="order-card-check-yes" onClick={setCheckYes}><span class="material-symbols-outlined">
check
</span></button>
            <button class="order-card-check-no" onClick={setCheckNo}><span class="material-symbols-outlined">
close
</span></button>
            </div>
            }
     
    </div>
     <div class="order-card-time-line">
        <div class="order-card-time-line-drop-down">
            <div>Timeline</div>
        </div>
        <div class="order-card-time-line-details">
        <div>
            Ordered
        </div>
        <div>
            {order?.receivedBy ? ". Received by " + order.receivedBy : ""}
        </div>
        <div>
            {order?.startedBy ? ". Started by " + order.startedBy : ""} 
        </div>
        <div>
            {order?.prepCompletedBy ? ". Completed by " + order.prepCompletedBy : ""} 

        </div>
        </div>
    </div>
</div>

}

export default OrderCard;

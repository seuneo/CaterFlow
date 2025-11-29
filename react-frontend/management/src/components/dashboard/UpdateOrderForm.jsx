import { useState, useEffect } from "react";
import { useOrderBank } from "../../orders/order";
import Loader from '../Loader'
import OrderForm from "./OrderForm";
import {subHours, addHours} from 'date-fns';

function UpdateOrderForm({showUpdateOrder, currentId}){
    console.log(currentId);

    const {fetchOrder, editOrder, order} = useOrderBank();
    console.log(order);
           
    const [loading, setLoading] = useState(true);
             useEffect(() => {
               fetchOrder(currentId)
               .finally(() => {
                setLoading(false); 
                       
              })
             }, []);
             
    function closeOrderForm(){
        showUpdateOrder(false);
    }

    const [newOrder, setNewOrder] = useState({date: "", time: ""});
    useEffect(() => {
        setNewOrder((prevValue)=>{
            return {...order, 
              time:  new Date(order?.date).toLocaleTimeString([],{
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false}),
                date: new Date(order?.date).toLocaleString().slice(0,10)
            }
        })
        
      }, [order]);

    console.log(newOrder);

    const [fieldsMissing, setFieldsMissing] = useState({
      name: false,
      contact: false,
      date: false,
      deliveryMode: false,
      orderList: false
     });

    async function addOrder(){
        
    if(!newOrder.name || !newOrder.contact || !newOrder.date || !newOrder.deliveryMode || !newOrder.orderList || newOrder.orderList.length == 0  ){
        
        if(!newOrder.name){
          setFieldsMissing((fields)=> {
            return {...fields, name: true}
          });
       }
       if(!newOrder.contact){
          setFieldsMissing((fields)=> {
            return {...fields, contact: true}
          });
       }
       if(!newOrder.date){
          setFieldsMissing((fields)=> {
            return {...fields, date: true}
          });
       }
       if(!newOrder.time){
          setFieldsMissing((fields)=> {
            return {...fields, time: true}
          });
       }
       if(!newOrder.deliveryMode){
          setFieldsMissing((fields)=> {
            return {...fields, deliveryMode: true}
          });
       }

       if(!newOrder.orderList || newOrder.orderList.length == 0){
          setFieldsMissing((fields)=> {
            return {...fields, orderList: true}
          });
       }
    }

        else{ 
        
        var o = {
          name: newOrder.name,
          contact: newOrder.contact,
          store: newOrder.store,
          deliveryMode: newOrder.deliveryMode,
          paymentStatus: newOrder.paymentStatus,
          date: new Date(newOrder?.date + "T" + newOrder?.time),
          orderList: newOrder.orderList

        }

        console.log(newOrder.date + "T" + newOrder.time)
        if(newOrder.deliveryAddress !== null && newOrder.deliveryAddress !== ""){
          o = {...o, deliveryAddress: newOrder.deliveryAddress}

        }
        if(newOrder.notes !== null && newOrder.notes !== ""){
          o= {...o, notes: newOrder.notes}

        }

        setFieldsMissing((fields)=> {
            return  {
      name: false,
      contact: false,
      date: false,
      deliveryMode: false,
      orderList: false
     }
          });

        editOrder(currentId,o);
        closeOrderForm();
    }
    
      }

      if(loading){
        return <Loader/>
      }

    return <div class="order-form-bg">
        <OrderForm fieldsMissing={fieldsMissing} setFieldsMissing={setFieldsMissing} closeOrderForm={closeOrderForm} addOrder={addOrder} newOrder={newOrder} setNewOrder={setNewOrder}/>

    </div>

}

export default UpdateOrderForm;

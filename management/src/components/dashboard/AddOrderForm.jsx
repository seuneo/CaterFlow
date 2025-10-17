import { useState } from "react";
import OrderForm from "./OrderForm";
import {subHours, addHours} from 'date-fns';



function AddOrderForm({createOrder, showOrderForm}){

    function closeOrderForm(){
        showOrderForm(false);
    }

    const [newOrder, setNewOrder] = useState({
       name: "",
       contact: "",
       notes: "",
       store: "suyacitycatering",
       deliveryMode: "Pickup",
       paymentStatus: "Not Paid",
       date: "",
       time:"",
       orderList: [] 
     })

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
          date: new Date(newOrder.date + "T" + newOrder.time),
          orderList: newOrder.orderList,
          type: "catering"
        }
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

        createOrder(o);
        closeOrderForm();
    }
    
      }


    return <div class="order-form-bg">
    <OrderForm fieldsMissing={fieldsMissing} setFieldsMissing={setFieldsMissing} closeOrderForm={closeOrderForm} addOrder={addOrder} newOrder={newOrder} setNewOrder={setNewOrder}/>
    
    </div>


}

export default AddOrderForm;

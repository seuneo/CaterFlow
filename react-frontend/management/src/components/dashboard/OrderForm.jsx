import { useState } from "react";

function OrderForm({closeOrderForm, fieldsMissing, setFieldsMissing, addOrder, newOrder, setNewOrder}){

    function handleChange(event) {
       const {value, name, id} = event.target;
       setNewOrder(prevValue => {
         if(name === "name"){
          setFieldsMissing((fields)=> {
            return {...fields, name: false}
          });

           return {
             ...prevValue, 
             name: value         
           }             
         }

         else if(name === "contact"){

          setFieldsMissing((fields)=> {
            return {...fields, contact: false}
          });
           return {
               ...prevValue, 
               contact: value         
             }
         }

         else if(name === "notes"){
           return {
               ...prevValue, 
               notes: value         
             }
         }

         else if(name === "store"){
           return {
               ...prevValue, 
               store: value         
             }
         }

         else if(name === "deliveryMode"){
           return {
               ...prevValue, 
               deliveryMode: value         
             }
         }

         else if(name === "deliveryAddress"){
           return {
               ...prevValue, 
               deliveryAddress: value         
             }
         }

         else if(name === "date"){

          setFieldsMissing((fields)=> {
            return {...fields, date: false}
          });

           return {
               ...prevValue, 
               date: value       
             }
         }

         else if(name === "time"){
          setFieldsMissing((fields)=> {
            return {...fields, time: false}
          });

           return {

               ...prevValue,
               time: value      
             }
         }

         else if(name === "paymentStatus"){
           return {
               ...prevValue, 
               paymentStatus: value         
             }
         }

       });
     }

     const [orderItem, setOrderItem] = useState({name: "", quantity:""});
    function handleOrderChange(event){
 
     const {value, name} = event.target;
     if(name == "item-name"){
       setOrderItem(prevValue => {
         return {
           name: value,
           quantity: prevValue.quantity

       }});

       setFieldsMissing((fields)=> {
            return {...fields, orderList: false}
          });

     }
     if(name == "item-quantity"){

      setFieldsMissing((fields)=> {
            return {...fields, orderList: false}
          });

      if(( parseInt(value) <= 500 && parseInt(value) >= 0) || value == ""){
        setOrderItem(prevValue => {
                return {
                  name: prevValue.name,
                  quantity: value

              }});
      }
       
     }
     
      
   }

    function addOrderList(){
        if(orderItem.name !== "" && orderItem.quantity !== ""){
          setNewOrder((prevValue)=>{
              var updatedList = [...prevValue.orderList];                      
                      updatedList.push(orderItem);
                      
                      return {...prevValue, orderList:updatedList};
                    })

        setOrderItem({name: "", quantity: ""});
        }
      }

       function deleteOrderList(event){

        const{name} = event.target;
        setNewOrder((prevValue)=>{

          return {...prevValue, orderList: prevValue.orderList.filter((order, index) => index != name)};
        })
        
      }

    return  <div class="order-form-box">
        <div >
<button class="order-form-exit" onClick={closeOrderForm}>x</button>
 <div>
     <div class="order-form-header">
    Add Order
    </div>

<div>Customer Details</div>

<div class={fieldsMissing?.name == true ? "order-form-input-missing" : "order-form-input"}>
      <div class="order-form-label">
        Name
      </div>
      <div>
        <input value={newOrder?.name ?? ""} name="name" onChange={handleChange}/>
      </div> 

            { fieldsMissing?.name && <div class="order-form-fields-missing">This field can't be empty</div>}
   
    </div>

    <div class={fieldsMissing?.contact == true ? "order-form-input-missing" : "order-form-input"}>
      <div class="order-form-label">
        Phone Number
      </div>
      <div>
        <input value={newOrder?.contact ?? ""} name="contact" onChange={handleChange}/>
      </div> 
            { fieldsMissing?.contact && <div class="order-form-fields-missing">This field can't be empty</div>}
   
    </div>

    <div class={fieldsMissing?.date == true ? "order-form-input-missing" : "order-form-input"}>
      <div class="order-form-label">
        Date
      </div>
      <div>
        <div class="order-form-date">
        <input  value={newOrder?.date ?? ""} name="date" onChange={handleChange} type="date"/>
      </div>
      </div>  
       { fieldsMissing?.date && <div class="order-form-fields-missing">This field can't be empty</div>} 
    </div>

    <div class={fieldsMissing?.time == true ? "order-form-input-missing" : "order-form-input"}>
      <div class="order-form-label">
        Time
      </div>
      <div>
        <div class="order-form-time">
        <input  value={newOrder?.time ?? ""} name="time" onChange={handleChange} type="time"/>
      </div> 
      </div>
      { fieldsMissing?.time && <div class="order-form-fields-missing">This field can't be empty</div>}   
    </div>

    <div class="order-form-input">
      <div class="order-form-label">Store</div>
      <div>
        <select value={newOrder?.store ?? "suyacitycatering" } onChange={handleChange} name="store" id="store">
          <option value="suyacitycatering">Fieldgate</option>
          <option value="simplychopskitimat">Kitimat</option>
      </select> 
      </div>     
    </div>

    <div class="order-form-input">
      <div class="order-form-label">
        Delivery Mode
      </div>
      <div>
        <select value={newOrder?.deliveryMode ?? "Pickup"} onChange={handleChange} name="deliveryMode">
  <option value="Pickup">Pickup</option>
  <option value="Delivery">Delivery</option>
</select>
      </div>    
    </div>
    <div class="order-form-input">
      <div class="order-form-label">
      Delivery Address

      </div>
      <div>
        <input value={newOrder?.deliveryAddress ?? ""} name="deliveryAddress" onChange={handleChange}/>
      </div>
    </div>
      

    <div class="order-form-input">
      <div class="order-form-label">
      Payment Status
      </div>
      <div>
        <select value={newOrder?.paymentStatus ?? "Not Paid"} onChange={handleChange} name="paymentStatus">
  <option value="Not Paid">Not Paid</option>
  <option value="Paid">Paid</option>
</select>
      </div>    
    </div>

</div>

   <div class="order-form-header">
    Order Items
    </div>

    <div>
<div class="order-form-order-list-add-header">
  <div>Name</div>
  <div>Quantity</div>
  <div></div>
</div>

</div>

<div class="order-form-order-list-add-inputs">
  <input value={orderItem?.name ?? ''} onChange={handleOrderChange} name="item-name"/> 
    
<input value={orderItem?.quantity ?? ''} onChange={handleOrderChange} name="item-quantity"/>
<button class="order-form-order-list-add-item-button" onClick={addOrderList}>Add Item</button>
</div>

<div class="order-form-order-list-header">

<div>Item</div>

<div>Quantity</div>
</div>
{newOrder?.orderList.map((item, index)=>{
  return <div class="order-form-order-list">
  <div>{item.name} </div>
  <div>{item.quantity} </div>
  <button class="order-form-order-list-delete-item-button" name={index} onClick={deleteOrderList}>Delete</button>
   </div>
})} 

{ fieldsMissing.orderList && <div class="order-form-fields-missing">Order can't be empty</div>}


<div class="order-form-input">
      <div class="order-form-label">
        Notes
      </div>
      <div>
    <textarea name="notes" value={newOrder?.notes ?? ''} onChange={handleChange} rows="3" cols="30"></textarea>
      </div>    
    </div>

<button class="order-form-save" onClick={addOrder}>Add order</button>    </div>

    </div>

    

}

export default OrderForm

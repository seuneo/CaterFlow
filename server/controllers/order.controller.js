import Order from '../models/order.model.js';
import mongoose from 'mongoose';

export const createOrder = async (req, res) => {
    const order = req.body;

    if(!order.name || !order.contact || !order.date || !order.deliveryMode || !order.orderList ){
      return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newOrder = new Order(order)

    try {
      await newOrder.save();
      res.status(201).json({success: true, data: newOrder});
    } catch (error) {
      console.error("Error in Creating product:", error.message);
      res.status(500).json({success: false, message: "Server Error"});  
    }
  }

  export const getOrdersByStore = async (req, res)=> {
      const {store} = req.params
    
          //const {store} = req.body
          try {
            const orders = await Order.find({
              store
            });
  
            res.status(200).json({success: true, data: orders});
          } catch (error) {
            console.log("error in fetching orders: ", error.message);
            res.status(500).json({success: false, message: "Server Error"});       
          }   
        }

export const getOrders = async (req, res)=> {
        try {
          const orders = await Order.find({});
          res.status(200).json({success: true, data: orders});
        } catch (error) {
          console.log("error in fetching orders: ", error.message);
          res.status(500).json({success: false, message: "Server Error"});       
        }   
      }

export const updateOrder = async (req, res) => {
    const {id} = req.params;
    const order = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({success:false, message:"invalid order id"});
    }

    try {
      const updateOrder = await Order.findByIdAndUpdate(id, order, { new: true });
      console.log(updateOrder);
      res.status(200).json({ success: true, data: updateOrder});
    }
    catch (error){
      //console.error("Error in deleting product:", error.message);
      res.status(500).json({success:false, message:"server error"});
    }  
  }

  export const deleteOrder = async (req, res) => {
    const {id} = req.params
    console.log(":id", id);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalid order id"});
      }

    try {
      await Order.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: 'order deleted'});
    }
    catch (error){
      console.error("Error in deleting product:", error.message);
      res.status(500).json({success:false, message:"Server Error"});
    }   
  }

  export const getOrder = async (req, res) => {
    const {id} = req.params
    console.log(":id", id);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalid order id"});
      }

    try {
      const order = await Order.findById(id);
      res.status(200).json({ success: true, data: order});
    }
    catch (error){
      console.error("Error in fetching order:", error.message);
      res.status(500).json({success:false, message:"Server Error"});
    }   
  }

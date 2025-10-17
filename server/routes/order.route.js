import express from "express";
import { createOrder, deleteOrder, getOrders, getOrdersByStore, getOrder, updateOrder } from "../controllers/order.controller.js";
import authenticateToken from "../utils/authMiddleware.js";

const router = express.Router();

  //create
  router.post("/", createOrder);

  //read
  router.get("/", authenticateToken, getOrders);

  //update all fields
  router.put("/:id", updateOrder);

  //delete
  router.delete("/id/:id", deleteOrder);

  router.get("/id/:id", getOrder);

  router.get("/store/:store", getOrdersByStore);

export default router;
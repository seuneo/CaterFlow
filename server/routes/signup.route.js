import express from "express";
import { createUserC } from "../controllers/user.controller.js";

const router = express.Router();

  //create
  router.post("/", createUserC);

  /*
  //read
  router.get("/",  getOrders);

  //update all fields
  router.put("/:id", updateOrder);

  //delete
  router.delete("/:id", deleteOrder);*/

export default router;
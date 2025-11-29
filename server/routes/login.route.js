import express from "express";
import { loginC } from "../controllers/login.controller.js";

const router = express.Router();

  //create
  router.post("/login", loginC);

export default router;
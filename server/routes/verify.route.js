import express from "express";
import { verifyC } from "../controllers/verify.controller.js";
import authenticateToken from "../utils/authMiddleware.js";


const router = express.Router();

  //create
  router.get("/", authenticateToken, verifyC);

export default router;
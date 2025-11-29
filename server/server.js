import express from "express";
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import bodyParser from "body-parser";
import cors from 'cors';

import orderRoutes from './routes/order.route.js'
import signUpRoutes from './routes/signup.route.js'
import loginRoutes from './routes/login.route.js'
import verifyRoutes from './routes/verify.route.js'

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(cors());


app.use('/api/orders', orderRoutes);
app.use('/api/register', signUpRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/verify', verifyRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on ${PORT}`);
  });

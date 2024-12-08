import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/UserRoute';
import connectDatabase from './config/database';

dotenv.config();
connectDatabase();

const app = express();

app.use(express.json());
app.use('/api/users', userRoute);

export default app;
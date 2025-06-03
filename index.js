import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import favoriteRouter from './routes/favoriteRoutes.js';

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter);
app.use('/api/users', favoriteRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import answersRoutes from './routes/answers.js';
const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/answers',answersRoutes);

app.get('/', (req, res) => {
res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} `)))
.catch((error) => console.log(error));
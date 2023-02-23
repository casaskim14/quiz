import express from 'express';
import dotEnv from 'dotenv';
import cors from 'cors';
import Routes from './routes';
// const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')

dotEnv.config();
const port = process.env.PORT || 5000;

// connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.use('/api/quiz', require('./routes/quizRoutes'))

// app.use(errorHandler)

Routes.initRoutes(app);
app.listen(port, () =>
  console.log(`Server started on port ${port}`),
);

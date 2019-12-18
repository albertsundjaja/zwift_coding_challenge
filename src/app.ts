import express from 'express';
import meteorRoutes from './routes/meteorRoutes';
import cors from 'cors';

const app = express();
//TODO remove cors, as this is for easier testing purpose only
app.use(cors());
app.use(meteorRoutes);

app.listen(8080);
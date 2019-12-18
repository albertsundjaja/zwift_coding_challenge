import express from 'express';
import meteorRoutes from './routes/meteorRoutes';



const app = express();
app.use(meteorRoutes);

app.listen(8080);
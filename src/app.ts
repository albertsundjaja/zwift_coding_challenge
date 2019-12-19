import express from 'express';
import meteorRoutes from './routes/meteorRoutes';
import cors from 'cors';
import path from 'path';

const app = express();
//TODO remove cors, as this is for easier testing purpose only
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../', 'zwift_coding_challenge_react/build')));
app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'zwift_coding_challenge_react/build', 'index.html'));
});

app.use(meteorRoutes);

app.listen(8080);
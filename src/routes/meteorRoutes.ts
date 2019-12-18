import express from 'express';
import * as meteorControllers from '../controllers/meteorControllers';

const router = express.Router()

router.get('/meteorites', meteorControllers.GET_meteorites);

export default router;
import express from 'express';
import irrfValuesController from '../controllers/irrfValues.controller.js';

const router = express.Router();

router.get('/', irrfValuesController.getIrrfValues);

export default router;

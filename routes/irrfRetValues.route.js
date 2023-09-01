import express from 'express';
import irrfRetValuesController from '../controllers/irrfRetValues.controller.js';

const router = express.Router();

router.get('/', irrfRetValuesController.getIrrfRetValues);

export default router;

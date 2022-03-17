import express from 'express';
import { createAnswer, readAnswers } from '../controllers/answers.js';

const router = express.Router();
router.get('/', readAnswers);
router.post('/', createAnswer);
export default router;
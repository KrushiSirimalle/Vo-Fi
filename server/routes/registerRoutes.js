import express from 'express';
import { register } from '../controllers/registerController.js';

const router = express.Router();

// Route for user registration
router.post('/register', register);

export default router;

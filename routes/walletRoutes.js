import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { getWallet } from '../controllers/walletController.js';

const router = express.Router();

router.get('/', authenticateToken, getWallet);

export default router;

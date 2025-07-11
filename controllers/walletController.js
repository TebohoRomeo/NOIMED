import pool from '../config/db.js';

import { getWallet, updateWalletBalance } from '../models/Wallet.js';
import { recordTransaction } from '../models/Transaction.js';

export const getUserWallet = async (req, res) => {
  try {
    const wallet = await getWallet(req.user.userId);
    res.json({ wallet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Could not fetch wallet' });
  }
};

export const topUpWallet = async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.userId;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: 'Invalid top-up amount' });
  }

  try {
    await updateWalletBalance(userId, amount);
    await recordTransaction(userId, amount, 'topup');
    res.json({ message: 'Top-up successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Top-up failed' });
  }
};

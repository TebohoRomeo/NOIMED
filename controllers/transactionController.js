import { getUserTransactions } from '../models/Transaction.js';

export const getTransactions = async (req, res) => {
  try {
    const transactions = await getUserTransactions(req.user.userId);
    res.json({ transactions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch transactions' });
  }
};

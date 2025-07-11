import pool from '../config/db.js';

export const getWallet = async (req, res) => {
  try {
    const userId = req.user.userId;
    const result = await pool.query(
      'SELECT * FROM wallets WHERE user_id = $1',
      [userId]
    );

    res.json({ wallet: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Could not fetch wallet' });
  }
};

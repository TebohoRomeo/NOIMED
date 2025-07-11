import pool from '../config/db.js';

export const recordTransaction = async (userId, amount, type) => {
  return await pool.query(`
    INSERT INTO transactions (user_id, amount, type)
    VALUES ($1, $2, $3)
  `, [userId, amount, type]);
};

export const getUserTransactions = async (userId) => {
  const result = await pool.query(`
    SELECT * FROM transactions
    WHERE user_id = $1
    ORDER BY created_at DESC
  `, [userId]);

  return result.rows;
};

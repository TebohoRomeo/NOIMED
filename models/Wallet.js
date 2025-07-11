import pool from '../config/db.js';

export const createWallet = async (userId) => {
  return await pool.query('INSERT INTO wallets (user_id) VALUES ($1)', [userId]);
};

export const getWallet = async (userId) => {
  const result = await pool.query('SELECT * FROM wallets WHERE user_id = $1', [userId]);
  return result.rows[0];
};

export const updateWalletBalance = async (userId, amount) => {
  return await pool.query(`
    UPDATE wallets SET balance = balance + $1 WHERE user_id = $2
  `, [amount, userId]);
};

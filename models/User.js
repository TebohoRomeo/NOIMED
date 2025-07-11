import pool from '../config/db.js';

export const createUser = async ({ fullName, email, password, nationalId }) => {
  const result = await pool.query(`
    INSERT INTO users (full_name, email, password, national_id)
    VALUES ($1, $2, $3, $4)
    RETURNING id, full_name, email, role
  `, [fullName, email, password, nationalId]);

  return result.rows[0];
};

export const getUserByEmail = async (email) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

export const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

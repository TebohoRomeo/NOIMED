import pool from '../config/db.js';

export const submitCardApplication = async (userId, idDocumentPath) => {
  const result = await pool.query(`
    INSERT INTO card_applications (user_id, id_document)
    VALUES ($1, $2)
    RETURNING *
  `, [userId, idDocumentPath]);

  return result.rows[0];
};

export const getUserApplication = async (userId) => {
  const result = await pool.query('SELECT * FROM card_applications WHERE user_id = $1', [userId]);
  return result.rows[0];
};

export const getAllApplications = async () => {
  const result = await pool.query(`
    SELECT ca.*, u.full_name, u.email 
    FROM card_applications ca
    JOIN users u ON ca.user_id = u.id
    ORDER BY ca.created_at DESC
  `);
  return result.rows;
};

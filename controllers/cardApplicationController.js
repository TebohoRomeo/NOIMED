import pool from '../config/db.js';

export const submitApplication = async (req, res) => {
  try {
    const userId = req.user.userId;
    const idDocument = req.file.path;

    // Check for existing application
    const existing = await pool.query(
      'SELECT * FROM card_applications WHERE user_id = $1',
      [userId]
    );
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Application already submitted' });
    }

    const result = await pool.query(
      `INSERT INTO card_applications (user_id, id_document)
       VALUES ($1, $2) RETURNING *`,
      [userId, idDocument]
    );

    res.status(201).json({ application: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

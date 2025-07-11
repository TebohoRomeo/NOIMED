import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/admin/applications', authenticateToken, requireAdmin, async (req, res) => {
  const result = await pool.query(
    `SELECT ca.*, u.full_name, u.email FROM card_applications ca
     JOIN users u ON u.id = ca.user_id ORDER BY ca.created_at DESC`
  );
  res.json({ applications: result.rows });
});


export default router;

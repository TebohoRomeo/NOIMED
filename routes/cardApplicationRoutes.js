import express from 'express';
import multer from 'multer';
import { authenticateToken } from '../middleware/auth.js';
import { submitApplication } from '../controllers/cardApplicationController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${req.user.userId}-${uniqueSuffix}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/apply', authenticateToken, upload.single('idDocument'), submitApplication);

export default router;

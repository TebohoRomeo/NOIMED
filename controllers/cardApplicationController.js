import pool from '../config/db.js';
import {
  submitCardApplication,
  getUserApplication
} from '../models/CardApplication.js';

export const applyForCard = async (req, res) => {
  try {
    const userId = req.user.userId;
    const existing = await getUserApplication(userId);

    if (existing) {
      return res.status(400).json({ message: 'Application already submitted' });
    }

    const filePath = req.file.path;
    const application = await submitCardApplication(userId, filePath);

    res.status(201).json({ application });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Card application failed' });
  }
};

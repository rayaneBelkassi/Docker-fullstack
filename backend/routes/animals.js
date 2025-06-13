const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /animals - Liste tous les animaux
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;

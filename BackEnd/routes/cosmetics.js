const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /cosmetics — fetch all cosmetic items
router.get('/', (req, res) => {
  const query = 'SELECT * FROM cosmetics';
  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});

// POST /cosmetics/update-stock — update cosmetic item quantity
router.post('/update-stock', (req, res) => {
  const { id, quantity } = req.body;

  const selectQuery = 'SELECT qty FROM cosmetics WHERE id = ?';
  db.query(selectQuery, [id], (selectErr, results) => {
    if (selectErr) {
      console.error('Select error:', selectErr);
      return res.status(500).send('Database error');
    }

    if (results.length === 0) {
      return res.status(404).send('Item not found');
    }

    const currentQty = results[0].qty;
    const newQty = Math.max(0, currentQty - quantity);

    const updateQuery = 'UPDATE cosmetics SET qty = ? WHERE id = ?';
    db.query(updateQuery, [newQty, id], (updateErr) => {
      if (updateErr) {
        console.error('Update error:', updateErr);
        return res.status(500).send('Failed to update stock');
      }

      res.status(200).send('Stock updated');
    });
  });
});

module.exports = router;

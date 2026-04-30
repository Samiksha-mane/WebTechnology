const express = require('express');
const router = express.Router();

let items = [];
let idCounter = 1;

// ADD ITEM
router.post('/add', (req, res) => {
  const { type, name, description, contact } = req.body;

  const newItem = {
    id: idCounter++,
    type,
    name,
    description,
    contact,
    date: new Date().toLocaleString()
  };

  items.push(newItem);
  res.json({ message: "Item added" });
});

// GET ITEMS
router.get('/items', (req, res) => {
  const { type } = req.query;

  if (type) {
    return res.json(items.filter(item => item.type === type));
  }

  res.json(items);
});

// DELETE ITEM
router.delete('/item/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.json({ message: "Deleted" });
});

// SEARCH
router.get('/search', (req, res) => {
  const q = req.query.q.toLowerCase();

  const result = items.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  );

  res.json(result);
});

module.exports = router;
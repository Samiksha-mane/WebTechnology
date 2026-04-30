const express = require('express');
const cors = require('cors'); // ✅ ADD THIS

const app = express();
const PORT = 5000;

app.use(cors()); // ✅ ENABLE CORS
app.use(express.json());
app.use(express.static('public'));

// Routes
const itemRoutes = require('./routes/items');
app.use('/api', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
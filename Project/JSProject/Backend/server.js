const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// MEMBERS DATA
const members = [
  {name:"Asha", role:"President"},
  {name:"Rahul", role:"Vice President"},
  {name:"Neha", role:"Technical Head"},
  {name:"Amit", role:"Developer"},
  {name:"Samiksha", role:"Designer"}
];

// EVENTS DATA
const events = [
  {
    name:"Hackathon 2026",
    date:"2026-05-01",
    desc:"24-hour coding competition"
  },
  {
    name:"Web Workshop",
    date:"2025-01-10",
    desc:"Learn HTML, CSS, JS"
  },
  {
    name:"AI Seminar",
    date:"2026-06-15",
    desc:"Intro to AI"
  }
];

// ROUTES
app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
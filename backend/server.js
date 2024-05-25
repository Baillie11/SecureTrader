const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Sample data
const transactions = [
  { id: 1, amount: 100, status: 'Approved' },
  { id: 2, amount: 200, status: 'Pending' },
  { id: 3, amount: 300, status: 'Declined' },
];

// Routes
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

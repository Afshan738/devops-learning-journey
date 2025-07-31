const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
];

app.get("/api/quotes", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(port, () => console.log(`Backend server running on port ${port}`));

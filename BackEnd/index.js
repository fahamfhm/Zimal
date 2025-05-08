const express = require('express');
const cors = require('cors');
const app = express();
const foodRoutes = require('./routes/foods.js'); // food API
const cosmeticsRoutes = require('./routes/cosmetics.js');
const spicesRoutes = require('./routes/spices.js');



app.use(cors(
  {
    origin:["https://zimal.vercel.app"],
    methods:["POST","GET"],
    credentials: true
  }
));
app.use(express.json());
app.use('/images', express.static('public/images'));

app.get("/", (req, res) => {
  res.json("Hello");
})

// Routes
app.use('/foods', foodRoutes); // All /foods-related endpoints
app.use('/cosmetics', cosmeticsRoutes);
app.use('/spices', spicesRoutes);




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

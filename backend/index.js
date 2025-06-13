const express = require('express');
const cors = require('cors');
require('dotenv').config();
const animalRoutes = require('./routes/animals');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/animals', animalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

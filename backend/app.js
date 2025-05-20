const express = require('express');
const app = express();
const cors = require('cors');
const antiquesRoutes = require('./routes/antiques');

app.use(express.json());
app.use(cors());

app.use('/antiques', antiquesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
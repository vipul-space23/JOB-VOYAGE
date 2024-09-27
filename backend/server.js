const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/user', require('./routes/authRoutes'));
app.use('/api/company', require('./routes/comRoutes'));
app.use('/api/job', require('./routes/jobRoutes'));
app.use('/api/application', require('./routes/appRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

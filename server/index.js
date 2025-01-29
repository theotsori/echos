import 'dotenv/config'; // Use this instead of require('dotenv').config();
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Note the .js extension
import postRoutes from './routes/postRoutes.js';

// Debugging: Log the MongoDB URI
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// After mongoose.connect
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

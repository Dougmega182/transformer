const mongoose = require('mongoose');

// MongoDB connection string
const mongoDBUri = 'mongodb+srv://dale:Fr@nk1e2014$@transformhomes.gtj2t.mongodb.net/?retryWrites=true&w=majority&appName=transformhomes';

// Connect to the database
async function connect() {
  try {
    await mongoose.connect(mongoDBUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connect();

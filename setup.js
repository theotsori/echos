const mongoose = require('mongoose');

// Function to check and create the database
const setupDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/echos', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database "echos" created or connected successfully.');
    } catch (err) {
        console.error('Error setting up database:', err);
    } finally {
        await mongoose.connection.close();
    }
};

// Call the function
setupDatabase();
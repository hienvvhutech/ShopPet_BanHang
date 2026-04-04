require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/shoppet";

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB successfully!");

        // Start server after DB connection
        app.listen(PORT, () => {
            console.log(`Server is running in DEV mode on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to DB:", err);
    });

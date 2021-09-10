require('dotenv').config();

const presentationsData = require('./data/presentations');
const connectDB = require('./config/db');
const Presentations = require('./models/Presentation');

connectDB();

const importData = async () => {
    try {
        await Presentations.deleteMany({});
        await Presentations.insertMany(presentationsData);
        console.log("Data import successful");
        process.exit();
    } catch (error) {
        console.error("Error importing data");
        console.log(error);
        process.exit(1);
    }
};

importData(); 
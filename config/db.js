const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ecom_db");
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);

    }
}

module.exports = connectDB
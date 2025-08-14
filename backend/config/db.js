const mongoose = require("mongoose");

let isConnected = 0; // 0 = disconnected, 1 = connected

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    const conn = await mongoose.connect(mongoUri, {});
    isConnected = conn.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    throw err;
  }
};

module.exports = connectDB;

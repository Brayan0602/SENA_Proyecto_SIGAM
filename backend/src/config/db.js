import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        dbName: process.env.MONGO_DB_NAME || "sigam",
        serverSelectionTimeoutMS: 10000
      }
    );

    console.log(
      `✅ MongoDB conectado a '${mongoose.connection.name}' en ${mongoose.connection.host}`
    );

  } catch (error) {

    console.error(
      error.message
    );

    process.exit(1);

  }
};

export default connectDB;
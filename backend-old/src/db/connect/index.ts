import dotenv from "dotenv"
import mongoose from "mongoose"
import logger from "../../helpers/winston/dev_logger";

dotenv.config()

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error('Missing MONGO_URI environment variable');
}

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    logger.info('MongoDB connected successfully!');
  } catch (error) {
    logger.error('MongoDB connection error:', error);
  }
};

export default connectDB;
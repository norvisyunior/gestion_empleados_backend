import mongoose from "mongoose";

const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DataBase")
  } catch (error) {
    console.log(error);
  }
};

export default connectToDataBase;

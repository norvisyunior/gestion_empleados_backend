import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const connectToDataBase = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
      throw new Error("La variable de entorno MONGODB_URL no está definida");
    }
    await mongoose.connect(uri);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

export default connectToDataBase;

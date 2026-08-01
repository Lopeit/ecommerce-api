import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("A variável MONGO_URL não está definida no .env");
    }

    mongoose.set("strictQuery", true);

    await mongoose.connect(mongoUrl, {
      dbName: "ecommerce_db",
    } as mongoose.ConnectOptions);

    console.log("MongoDB conectado com sucesso");

    mongoose.connection.on("error", (err: Error) => {
      console.error("Erro na conexão com o mongoose", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB desconectado");
    });
  } catch (error) {
    console.error("Falha crítica ao se conectar ao MongoDB:", error);
  }
};

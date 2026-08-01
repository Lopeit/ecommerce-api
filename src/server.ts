import "dotenv/config";
import { connectMongoDB } from "./config/mongoose.js";

async function main() {
  await connectMongoDB();
  console.log("Servidor inicializando...");
}

main();

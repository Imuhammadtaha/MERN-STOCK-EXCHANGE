import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import formidableMiddleware from "express-formidable";
import path from "path";
import { fileURLToPath } from "url";

//dot env config
dotenv.config();

//es6 module fix

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//database Connection
connectDB();
//rest objrct
const app = express();
//middlewares
app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(formidableMiddleware());
app.use(express.static(path.join(__dirname, "./client/build")));

//routing
app.use("/api/v1/auth", authRoutes);

//rest api
// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app runing on ${PORT}`);
});

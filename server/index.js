import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database.js";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import { errorHandle, notFound } from "./middlewares/errorHandle.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

//routes
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

//middlewares
app.use(notFound);
app.use(errorHandle);

app.listen(PORT || 3001, async () => {
  await connectDatabase();
  console.log(`Server is running with port: ${process.env.PORT}`);
});

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/database.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

//routes
app.use("/api/user", authRouter);

app.listen(PORT || 3001, async () => {
  await connectDatabase();
  console.log(`Server is running with port: ${process.env.PORT}`);
});

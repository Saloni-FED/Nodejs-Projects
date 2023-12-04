import express from "express";
import task from "./routes/task.js";
import { connectDb } from "./db/connect.js";
import dotenv from "dotenv";
const app = express();

// Middleware
app.use(express.static("./public"))
app.use(express.json());



app.use("/api/v1/tasks", task);

// Mongodb  connection
dotenv.config();
const port = 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening to post ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

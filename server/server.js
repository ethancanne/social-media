import path from "path";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.router";

const app = express();

// get config vars
dotenv.config();

app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT;
app.listen(PORT, error =>
  error ? console.error(error) : console.info(`Listening on port ${PORT}.`)
);

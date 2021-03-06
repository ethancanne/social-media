import "core-js/stable";
import "regenerator-runtime/runtime";
import path from "path";
import express from "express";
// import dotenv from "dotenv";
import connectDb from "./db";

import userRouter from "./routers/user.router";
import postRouter from "./routers/post.router";

const app = express();

// get config vars
// dotenv.config();
//Connect to database
connectDb();

app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());

app.use(userRouter);
app.use(postRouter);

const PORT = process.env.PORT;
app.listen(PORT, error =>
  error ? console.error(error) : console.info(`Listening on port ${PORT}.`)
);

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

// Routes
import { router as UsersRouter } from "./routes/users";

import { passport } from "./core/passport";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(passport.initialize());

app.use("/users", UsersRouter);

async function start() {
  try {
    mongoose.connect(
      "mongodb+srv://vadim:zNAA5pMpZV46uzzW@cluster0.xtpjk.mongodb.net/clone?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

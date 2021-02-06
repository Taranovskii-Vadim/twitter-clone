import * as express from "express";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

// Routes
import { usersRouter } from "./routes/users";
import { tagsRouter } from "./routes/tags";

const server = express();

const PORT = process.env.PORT || 3001;

server.use(express.json());

server.use("/users", usersRouter);
server.use("/tags", tagsRouter);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://vadim:7sIPR7r7uisSvgi8@cluster0.xtpjk.mongodb.net/clone?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    server.listen(PORT, (): void => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

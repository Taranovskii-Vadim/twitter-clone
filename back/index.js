const express = require("express");

const tweetsRouter = require("./routes/tweets");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/tweets", tweetsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

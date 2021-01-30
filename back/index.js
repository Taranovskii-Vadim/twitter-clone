const express = require("express");

// Routers
const tweetsRouter = require("./routes/tweets");
const tagsRouter = require("./routes/tags");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/tweets", tweetsRouter);
app.use("/tags", tagsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

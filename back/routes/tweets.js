const { Router } = require("express");
const Tweet = require("../models/tweet");

const router = Router();

router.get("/", async (req, res) => {
  const data = await Tweet.getData();
  res.status(200).json(data);
});

router.get("/:id", async (req, res) => {
  const data = await Tweet.getData();
  const tweet = data.find(item => item.id === req.params.id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404);
  }
});

module.exports = router;

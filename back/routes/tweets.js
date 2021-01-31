const { Router } = require("express");
const Tweet = require("../models/tweet");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Tweet.getData();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send("Не удалось получить твиты");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Tweet.getData();
    const tweet = data.find(item => item.id === req.params.id);
    if (tweet) {
      res.status(200).json(tweet);
    } else {
      res.status(404);
    }
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const tweet = new Tweet(JSON.parse(req.body.text));
    res.status(201).json(tweet);
    await tweet.save();
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;

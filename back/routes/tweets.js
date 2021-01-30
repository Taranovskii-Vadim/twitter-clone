const { Router } = require("express");
const Tweet = require("../models/tweet");

const router = Router();

router.get("/", async (req, res) => {
  const data = await Tweet.getData();
  res.status(200).json(data);
});

module.exports = router;

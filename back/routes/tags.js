const { Router } = require("express");
const Tag = require("../models/tag");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await Tag.getData();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send("Не удалось получить темы");
  }
});

module.exports = router;

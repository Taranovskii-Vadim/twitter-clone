const { Router } = require("express");
const Tag = require("../models/tag");

const router = Router();

router.get("/", async (req, res) => {
  const data = await Tag.getData();
  res.json(data);
});

module.exports = router;

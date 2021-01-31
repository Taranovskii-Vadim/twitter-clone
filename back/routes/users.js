const { Router } = require("express");
const User = require("../models/user");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await User.getData();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send("Не удалось получить пользователей");
  }
});

module.exports = router;

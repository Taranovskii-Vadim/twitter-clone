const { Router } = require("express");
const User = require("../models/user");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await User.getData();
    res.status(200).json(data);
  } catch (e) {
    // TODO:send server err
    console.log(e);
  }
});

module.exports = router;

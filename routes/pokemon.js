const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  console.log(req);
  try {
    const postsData = await postsRepository.getPosts();
    res.status(200).json(postsData);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
});

module.exports = router;

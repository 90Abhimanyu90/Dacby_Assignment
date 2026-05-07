const express = require("express");

const Story = require("../models/Story");
const User = require("../models/User");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// GET ALL STORIES
router.get("/", async (req, res) => {
  try {

    const stories = await Story.find()
      .sort({ points: -1 });

    res.json(stories);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// GET SINGLE STORY
router.get("/:id", async (req, res) => {
  try {

    const story = await Story.findById(
      req.params.id
    );

    res.json(story);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// BOOKMARK STORY
router.post(
  "/:id/bookmark",
  authMiddleware,
  async (req, res) => {

    try {

      const user = await User.findById(
        req.user.id
      );

      const storyId = req.params.id;

      const alreadyBookmarked =
        user.bookmarks.includes(storyId);

      if (alreadyBookmarked) {

        user.bookmarks =
          user.bookmarks.filter(
            (id) => id.toString() !== storyId
          );

      } else {

        user.bookmarks.push(storyId);
      }

      await user.save();

      res.json({
        message: alreadyBookmarked
          ? "Bookmark removed"
          : "Bookmark added",
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;
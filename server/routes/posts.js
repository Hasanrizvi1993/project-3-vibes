const router = require("express").Router();
const { posts } = require("../controllers");
// const { comments } = require("../controllers");

router.get("/", posts.index);
router.get("/:id", posts.show);
router.post("/", posts.create);
router.put("/:id", posts.update);
router.delete("/:id", posts.destroy);

//comment
router.post("/:id/comment", posts.commentCreate);
//router.put("/:id/comment/:commentId", posts.commentUpdate);
// router.get("/:id/comments", posts.commentsShow);
// router.delete("/:id/comment/:commentId", comments.commentDestroy);

module.exports = router;

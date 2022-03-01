const router = require("express").Router()
const {comments} = require("../controllers") 

router.get("/", comments.index)
router.get("/:id", comments.show)
router.post("/posts/:id/comments", comments.create)
router.put("/:id", comments.update)
router.delete("/:id", comments.destroy)

module.exports = router;
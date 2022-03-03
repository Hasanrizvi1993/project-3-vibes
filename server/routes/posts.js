const router = require("express").Router()
const {posts} = require("../controllers") 



router.get("/", posts.index)
router.get("/:id", posts.show)
router.post("/", posts.create)
router.put("/:id", posts.update)
router.delete("/:id", posts.destroy)

// GET PROFILE PAGE POSTS for single user
router.get("/profile/:userName", posts.getProfilePosts)

module.exports = router;
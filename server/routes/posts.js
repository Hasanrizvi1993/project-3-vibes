const router = require("express").Router()
const {posts} = require("../controllers") 

router.get("/", posts.index) //RENDERS ALL POSTS
router.get("/:id", posts.show) //RENDERS SINGULAR POST
router.post("/", posts.create) //LETS USER CREATE POST 
router.put("/:id", posts.update) //LETS USER EDIT POST
router.delete("/:id", posts.destroy) //LETS USER DELETE POST

module.exports = router;
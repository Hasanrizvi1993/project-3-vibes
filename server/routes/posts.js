const router = require("express").Router()
const {posts} = require("../controllers") 
const multer = require('multer')

// Multer Img Uploader Middleware for Post Imgs
// Define Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/postImgs')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
})
// Multer Upload Parameters for Profile
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024*1024 * 5,
    },
})

// POST IMAGE UPLOAD ROUTE
router.post("/upload", upload.single('file'), posts.uploadPostImage)



router.get("/", posts.index)
router.get("/:id", posts.show)
router.post("/",  posts.create)
router.put("/:id", posts.update)
router.delete("/:id", posts.destroy)

// GET PROFILE PAGE POSTS for single user
router.get("/profile/:userName", posts.getProfilePosts)

module.exports = router;
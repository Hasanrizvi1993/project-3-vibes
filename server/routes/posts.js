const router = require("express").Router();
const { posts, comments } = require("../controllers");
const multer = require("multer");

// Multer Img Uploader Middleware for Post Imgs
// Define Storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/uploads/postImgs");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
// Multer Upload Parameters for Profile
const upload = multer({
	storage: storage,
	limits: {
		fieldSize: 1024 * 1024 * 5,
	},
});

// POST IMAGE UPLOAD ROUTE
router.post("/upload", upload.single("file"), posts.uploadPostImage);

router.get("/", posts.index); //RENDERS ALL POSTS
router.get("/:id", posts.show); //RENDERS SINGULAR POST
router.post("/", posts.create); //LETS USER CREATE POST
router.put("/:id", posts.update); //LETS USER EDIT POST
router.delete("/:id", posts.destroy); //LETS USER DELETE POST

// GET PROFILE PAGE POSTS for single user
router.get("/profile/:userName", posts.getProfilePosts);
// SHOW COMMENTS
router.get("/:id/comments", comments.show);
// CREATE COMMENT
router.post("/:id/comments", comments.create);
//router.put("/:id/comment/:commentId", posts.commentUpdate);
router.delete("/:id/comments/:commentId", comments.destroy);

module.exports = router;

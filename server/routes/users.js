const router = require("express").Router();
const { users } = require("../controllers");
const multer = require('multer');
const { authRequired } = require("../middleware/auth.required");//COMMENTING OUT UNTIL MIDDLEWARE IS ADDED BACK IN

// Multer Img Uploader Middleware for Profile Imgs
// Define Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/pfImgs')
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

// PF IMAGE UPLOAD ROUTE
router.post("/upload", upload.single('file'), users.uploadProfileImage);

router.get("/", authRequired, users.queryUser) 
router.get("/profile", authRequired, users.show); 
router.put("/:id", users.update) // EDIT USERS
router.delete("/:id", users.destroy)// DELETE USERS







module.exports = router;

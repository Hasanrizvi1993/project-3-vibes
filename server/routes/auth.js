const router = require("express").Router();
const {auth} = require("../controllers");

//routes 
router.post("/register", auth.register); //REGISISTERS NEW USER
router.post("/login", auth.login) //LOGS IN NEW USER

//export
module.exports = router;
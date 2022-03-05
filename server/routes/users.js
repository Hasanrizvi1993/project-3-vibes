const router = require("express").Router();
const { users } = require("../controllers");
// const authRequired = require("../middleware/auth.required"); COMMENTING OUT UNTIL MIDDLEWARE IS ADDED BACK IN

router.get("/", users.queryUser) 
router.get("/profile",users.show); //REMOVED AUTHREQUIRED TO WAIT FOR AUTHENTICATION 
router.put("/:id", users.update) //USED TO EDIT USERS
router.delete("/:id", users.destroy)//USED TO DELETE USERS







module.exports = router;

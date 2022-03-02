const router = require("express").Router();
const { users } = require("../controllers");
// const authRequired = require("../middleware/auth.required"); COMMENTING OUT UNTIL MIDDLEWARE IS ADDED BACK IN

router.get("/", users.index);
router.get("/profile",users.show); //RMOVED AUTHREQUIRED TO WAIT FOR AUTHENTICATION 
router.put("/:id", users.update)
router.delete("/:id", users.destroy)




module.exports = router;

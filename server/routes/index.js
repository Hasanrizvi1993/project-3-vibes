const router = require("express").Router();

// MAY RECONNECT LATER
router.use("/posts", require("./posts"));
router.use("/users", require("./users"));
router.use("/auth", require("./auth"));

module.exports = router;


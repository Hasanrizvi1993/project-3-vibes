// jwt middleware for verification
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        //grab that token
        const bearerHeader = req.headers.authorization;

        //if there is no token
        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403)
        }

        //if there is a token
        const token = bearerHeader.split(" ")[1];
        console.log(token, "Token Success")
        const payload = await jwt.verify(token, "Token Verified");
        console.log(payload, "Payload Sucess")
        req.userId = payload._id

        next()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({status: 500, message: "Internal Server Error."})
    }
}
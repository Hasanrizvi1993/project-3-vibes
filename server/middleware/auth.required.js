// jwt middleware for verification
const jwt = require("jsonwebtoken"); //MAY NEED TO BE UPTDATED FOR AUTHENTICATION

const authRequired = async (req, res, next) => {
    try {        
        const bearerHeader = req.headers.authorization;

        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403)
        }
        const userToken = bearerHeader.split(" ")[1];
        const payload = await jwt.verify(userToken, "VIBE$");
        req.userId = payload._id

        next()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({
                status: 500, 
                message: "Internal Server Error"
            })
    }
}

function verifyToken(req, res, next) {
    const userToken = req.header('Authorization');
    if (!userToken) return res.status(401).send('Access Denied!');
    
    try {
      const verified = jwt.verify(userToken, 'VIBES');
      req.user = verified;
    }
    catch(err) {
     res.status(400).send('Invalid Token!');
    }
  }

  module.exports = {
      authRequired,
      verifyToken
    }
  
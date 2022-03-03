const db = require("../models")

const index = (req, res) => {
    db.User.find()
    .exec((err, allUsers) => {
        return res.status(200).json({
            message: "Success!",
            data: allUsers
        })
    })
}

const show = async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.userId)
        return res.status(200).json({
            message: "Success",
            data: foundUser
        })
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json({message: "Internal Server Error."})
    }
}

// GET A USER - will query database for user based on post.userId on the feed, and for user based on username on profile page
const queryUser = async (req, res) => {
    // adding a query to route
    const userId = req.query.userId;
    const userName = req.query.userName;
    try {
        const user = userId ? await db.User.findById(userId) : await db.User.findOne({ userName: userName })
        
        const { password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
        
    } catch (err) {
        res.status(500).json(err)
    }

}



module.exports = {
    index,
    show, 
    queryUser,
}
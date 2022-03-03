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
            .json({message: "Interanl Server Error."})
    }
}

const queryUser = async (req, res) => {
    // adding a query to route
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({ username: username })
        
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
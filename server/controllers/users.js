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

const update = (req, res) => {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedUser) => {
			if (err)
				return res.status(400).json({
					message: "400 ERROR!",
					error: err,
				});
			return res.status(202).json({
				message: "Success",
				data: updatedUser,
			});
		}
	);
};
const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
		if (err)
			return res.status(400).json({
				message: "400 ERROR!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedUser,
		});
	});
};

module.exports = {
    index,
    show,
	update,
	destroy,
};









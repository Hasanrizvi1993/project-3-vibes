const db = require("../models");

const index = (req, res) => {
	db.User.find().exec((err, allUsers) => {
		return res.status(200).json({
			message: "Success!",
			data: allUsers,
		});
	});
};

const show = async (req, res) => {
	try {
		const foundUser = await db.User.findById(req.userId);
		return res.status(200).json({
			message: "Success",
			data: foundUser,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Server Error." });
	}
};

// GET A USER 
const queryUser = async (req, res) => {
	// adding a query to route
	const userId = req.query.userId;
	const userName = req.query.userName;
	try {
		const user = userId
			? await db.User.findById(userId)
			: await db.User.findOne({ userName: userName });

		const { password, updatedAt, ...other } = user._doc;
		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
};

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
		},
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

// PF IMAGE UPLOAD CONTROLLER
const uploadProfileImage = (req, res) => {
	try {
		return res.status(200).json({
			message: "Profile Image Uploaded successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Unable to Upload Post Image",
			error: err,
		});
	}
};

module.exports = {
	index,
	show,
	update,
	destroy,
	queryUser,
	uploadProfileImage,
};

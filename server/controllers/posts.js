const db = require("../models");

const index = (req, res) => {
	db.Post.find().exec((err, allPosts) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: allPosts,
		});
	});
};
const show = (req, res) => {
	db.Post.findById(req.params.id, (err, foundPost) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: foundPost,
		});
	});
};
const create = (req, res) => {
	db.Post.create(req.body, (err, savedPost) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(201).json({
			message: "Success",
			data: savedPost,
		});
	});
};
const update = (req, res) => {
	db.Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err)
				return res.status(400).json({
					message: "Utter Failure!",
					error: err,
				});
			return res.status(202).json({
				message: "Success",
				data: updatedPost,
			});
		}
	);
};
const destroy = (req, res) => {
	db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedPost,
		});
	});
};



module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};

const db = require("../models");

const index = (req, res) => {
	db.Comment.find().exec((err, allComments) => {
		if (err)
			return res.status(400).json({
				message: "Failure",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: allComments,
		});
	});
};
const show = (req, res) => {
	db.Comment.findById(req.params.id, (err, foundComments) => {
		if (err)
			return res.status(400).json({
				message: "Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: foundComments,
		});
	});
};
const create = (req, res) => {
	db.Comment.create(req.body, (err, savedComments) => {
		if (err)
			return res.status(400).json({
				message: "Failure",
				error: err,
			});
		return res.status(201).json({
			message: "Success",
			data: savedComments,
		});
	});
};

const update = (req, res) => {
	db.Comment.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedComments) => {
			if (err)
				return res.status(400).json({
					message: "Failure!",
					error: err,
				});
			return res.status(202).json({
				message: "Success",
				data: updatedComments,
			});
		},
	);
};
const destroy = (req, res) => {
	db.Comment.findByIdAndDelete(req.params.id, (err, deletedComments) => {
		if (err)
			return res.status(400).json({
				message: "Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedComments,
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

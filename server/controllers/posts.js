const db = require("../models");

const index = (req, res) => {
	db.Post.find().exec((err, allPosts) => {
		if (err)
			return res.status(400).json({
				message: "Failure!",
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
				message: "Failure!",
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
				message: "Failure!",
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
					message: "Failure!",
					error: err,
				});
			return res.status(202).json({
				message: "Success",
				data: updatedPost,
			});
		},
	);
};
const destroy = (req, res) => {
	db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err)
			return res.status(400).json({
				message: "Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedPost,
		});
	});
};

const commentCreate = (req, res) => {
	db.Post.findById(req.params.id)
		.then((foundPost) => {
			if (!foundPost) return console.log("error!!!!");

			foundPost.comments.push(req.body.body);
			foundPost.save();

			return res.status(201).json({
				message: "comments are done",
				data: foundPost.comments,
			});
		})
		.catch((err) => console.log(err));
};







// const commentUpdate = (req, res) => {
// 	db.Post.findById(req.params.id).then((foundPost) => {
// 		if (!foundPost)
// 			return console.log("there is problem with comments updating");

// 		const commentById = foundPost.comments.id(req.params.commentId);
// 		commentById.body = req.body;
// 		foundPost.save();
// 		return res.status(202).json({
// 			message: "Updated comments!!!",
// 			data: commentById,
// 		});
// 	});
// };

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
	commentCreate,
	// commentUpdate,
};

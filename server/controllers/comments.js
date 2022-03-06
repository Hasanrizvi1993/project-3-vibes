const db = require("../models");

const show = (req, res) => {
	db.Post.findById(req.params.id, (err, post) => {
		if (post) {
			return res.status(200).json({
				message: "success",
				data: post,
			});
		}
		if (err) {
			return res.status(404).json({
				message: "status 404",
				error: err,
			});
		}
	});
};

const create = (req, res) => {
	db.Post.findById(req.params.id, (err, post) => {
		post.comments.push(req.body);
		post.save();
		if (err) {
			return res.status(400).json({
				message: "Status 400 Error!",
				error: err,
			});
		}

		return res.status(201).json({
			message: "comment created",
			data: post.comments,
		});
	});
};








const destroy = (req, res) => {
	db.Post.findById(req.params.id, (err, post) => {
		const foundComment = post.comments.id(req.params.commentId);
		console.log(foundComment);
		foundComment.remove();
		post.save();

		return res.status(200).json({
			message: "comment deleted",
			data: foundComment,
		});
	});
};

module.exports = {
	// index,
	show,
	create,
	// update,
	destroy,
};

// const create = (req, res) => {
// 	db.Post.findById(req.params.id)
// 		.then((foundPost) => {
// 			if (!foundPost) return console.log("error!!!!");

// 			foundPost.comments.push(req.body.body);
// 			foundPost.save();

// 			return res.status(201).json({
// 				message: "comments are done",
// 				data: foundPost.comments,
// 			});
// 		})
// 		.catch((err) => console.log(err));
// };

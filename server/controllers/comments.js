const db = require("../models");

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
	bd.Post.findById(req.params.id)
}






module.exports = {
	// index,
	// show,
	create,
	// update,
	// destroy,
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

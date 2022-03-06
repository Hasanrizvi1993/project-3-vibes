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

const update = (req, res) => {
	db.Post.findById(req.params.id, (err, post) => {
		const foundComment = post.comments.id(req.params.commentId);
		foundComment.body = req.body.body;
		post.save();

		return res.status(200).json({
			message: "sucess!",
			data: foundComment,
		});
	});
};

/*const destroy = (req, res) => {
	db.Post.findById(req.params.id, (err, post) => {
		const foundComment = (req.params.commentId);
		if (err) {
			res.status(400).json({
				error: err,
			})
		}
		foundComment.remove();
		post.save();

		return res.status(200).json({
			message: "comment deleted",
			data: foundComment,
		});
	});
};
*/
const destroy = async (req, res) => {
	await db.Post.findById(req.params.id).then((post) => {
		const foundComment = post.comments.findById(req.params.commentId)
		foundComment.remove();
		post.save();

		return res.status(200).json({
			message: "Comment Deleted!",
			});

	}).catch((err) => {
		return res.status(400).json({
			message: "Error. Couldn't Delete Comment...",
			err,
			})

	})  
	}


module.exports = {
	// index,
	show,
	create,
	update,
	destroy,
};
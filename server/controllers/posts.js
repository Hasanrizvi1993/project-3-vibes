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
				message: "Status 400 Error!",
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
				message: "Status 400 Error!",
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
					message: "Status 400 Error!",
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
				message: "Status 400 Error!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedPost,
		});
	});
};


//PROFILE PAGE POSTS ONLY 
const getProfilePosts = async (req, res) => {
	try {
		// find user based on userName
		const user = await db.User.findOne({ userName: req.params.userName });
		// get just that users posts based on the userId field
		const posts = await db.Post.find({ userId: user._id });
		res.status(200).json({
			message: "Success!",
			data: posts,
		});
	} catch (err) {
		res.status(500).json({
			message: "Unable to populate User's Posts",
			error: err,
		});
	}
};

// POST IMG UPLOAD CONTROLLER

const uploadPostImage = (req, res) => {
	try {
		return res.status(200).json({
			message: "Post Image Uploaded successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: "Unable to Upload Post Image",
			error: err,
		});
	}
};

// LIKE/UNLIKE POSTS
//LIKE or UNLIKE A POST

const toggleLikes = async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.id)
        if (!foundPost.likes.includes(req.body.userId)) {
            await foundPost.updateOne({
                $push: { likes: req.body.userId}
            })
            res.status(200).json({
				message: "The post was liked!",
			})
        } else {
            await foundPost.updateOne({
                $pull: { likes: req.body.userId }
            })
            res.status(200).json({
				message: "The post was unliked!",
			})
        } 
    } catch (err) {
        res.status(500).json({
			message: "Error liking post",
			error: err,
		})
        
    }
}

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
	getProfilePosts,
	uploadPostImage,
	toggleLikes,
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		body: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const postSchema = new Schema(
	{
		body: { type: String, required: true },
		img: { type: String },
		comments: [commentSchema],
		userId: { type: String },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Post", postSchema);
